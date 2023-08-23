// Component that hits a URL and redirects to login page if valid

import React, { useEffect } from "react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";
import { IWeb3Context, useWeb3Context } from "@/context/Web3ContextProvider";

export default function AuthRedirect({
  children,
  apiPath,
}: {
  children: React.ReactNode;
  apiPath: string;
}) {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code") ?? "";

  const {
    connectWallet,
    disconnect,
    state: { isAuthenticated, address, currentChain, provider },
  } = useWeb3Context() as IWeb3Context;

  const registerUser = async () => {
    // TODO error handling for when searchParams code is null/malformed
    const query = new URLSearchParams({
      code: code,
      wallet_address: address,
    });

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${apiPath}?` + query,
      {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    console.log(res);
    if (res.status == 200) {
      push("/dashboard/contributor");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log("logging in user");
      registerUser().catch(console.error);
    }
  }, [isAuthenticated]);

  return (
    <>
      {children}
      {!isAuthenticated ? (
        <button onClick={connectWallet}>Connect Metamask</button>
      ) : (
        <>
          <button onClick={disconnect}>Disconnect Metamask</button>
          <div>
            <p>{address}</p>
            <p>{currentChain}</p>
          </div>
        </>
      )}
    </>
  );
}
