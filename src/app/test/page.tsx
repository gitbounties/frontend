"use client";

import MultiStep from "@/components/Multistep";
import { IWeb3Context, useWeb3Context } from "@/context/Web3ContextProvider";
import useGitbountiesContract from "@/hooks/useGitbountiesContract";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [issues, setIssues] = useState([]);
  const [bounties, setBounties] = useState([]);

  const {
    connectWallet,
    disconnect,
    state: { isAuthenticated, address, currentChain, provider },
  } = useWeb3Context() as IWeb3Context;

  const contract = useGitbountiesContract();

  // contract?.on("Transfer", (from, to, value, event) => {
  //   console.log("Tansfer event", from, to, value, event);
  // });

  console.log("contract", contract);

  const handleLoginSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const { elements } = e.currentTarget;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/github/dummy/login`,
      {
        body: JSON.stringify({
          username: (elements.namedItem("username") as HTMLInputElement).value,
        }),
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    console.log("result", res);
    if (res.status == 200) {
      setIsLoggedIn(true);
    }
  };

  const handleBountySubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const { elements } = e.currentTarget;

    const data = {
      reward: parseInt(
        (elements.namedItem("reward") as HTMLInputElement).value
      ),
    };

    const query = new URLSearchParams({
      owner: (elements.namedItem("owner") as HTMLInputElement).value,
      repo: (elements.namedItem("repo") as HTMLInputElement).value,
      issue: (elements.namedItem("issue") as HTMLInputElement).value,
    });

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bounty?` + query,
      {
        body: JSON.stringify(data),
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    console.log("result", res);
  };

  const handleGetIssues = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/issue`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const body = await res.json();

    console.log("body", body);
  };

  const handleGetBounties = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bounty`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const body = await res.json();

    console.log("body", body);
  };

  const handleMintBounty = async (): Promise<void> => {
    const tx = await contract.mint();
    // console.log('transaction', tx);
    const receipt = await tx.wait();
    // console.log('transaction result', receipt);
    const filter = contract.filters.Transfer(null, null, null);
    const transferEvents = await contract.queryFilter(filter);

    const tokenId = transferEvents[transferEvents.length - 1].topics[4];
    console.log("minted new token with tokenId", tokenId);
  };

  return (
    <>
      <h1>Login</h1>

      <hr />
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

      <hr />

      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          defaultValue="MrPicklePinosaur"
        />
        <button type="submit">Submit</button>
      </form>

      {isLoggedIn ? <div>Logged In</div> : <div>Not Logged In</div>}

      <hr />

      <form onSubmit={handleBountySubmit}>
        <label htmlFor="reward">reward</label>
        <input type="text" id="reward" name="reward" defaultValue="1" />
        <label htmlFor="owner">owner</label>
        <input type="text" id="owner" name="owner" defaultValue="gitbounties" />
        <label htmlFor="repo">repo</label>
        <input type="text" id="repo" name="repo" defaultValue="sample_repo" />
        <label htmlFor="issue">issue</label>
        <input type="text" id="issue" name="issue" defaultValue="2" />
        <button type="submit">Submit</button>
      </form>

      <hr />

      <form onSubmit={handleGetIssues}>
        <button type="submit">Get Issues</button>
      </form>

      <hr />

      <form onSubmit={handleGetBounties}>
        <button type="submit">Get Bounites</button>
      </form>

      <hr />

      <button onClick={handleMintBounty}>Mint Bounites</button>
    </>
  );
}
