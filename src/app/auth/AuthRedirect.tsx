// Component that hits a URL and redirects to login page if valid

import React, { useEffect } from "react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";

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

  useEffect(() => {
    const request = async () => {
      // TODO error handling for when searchParams code is null/malformed
      const query = new URLSearchParams({
        code: code,
      });

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${apiPath}?` + query,
        {
          method: "get",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      console.log(res);
      if (res.status == 200) {
        push("/dashboard/contributor");
      }
    };

    request().catch(console.error);
  }, [code]);

  return <>{children}</>;
}
