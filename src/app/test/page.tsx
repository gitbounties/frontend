"use client";

import Wallet from "@/components/Wallet";
import { useListen } from "@/hooks/useListen";
import { useMetamask } from "@/hooks/useMetamask";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [issues, setIssues] = useState([]);
  const [bounties, setBounties] = useState([]);

  const { dispatch } = useMetamask();
  const listen = useListen();

  useEffect(() => {
    if (typeof window !== undefined) {
      // start by checking if window.ethereum is present, indicating a wallet extension
      const ethereumProviderInjected = typeof window.ethereum !== "undefined";
      // this could be other wallets so we can verify if we are dealing with metamask
      // using the boolean constructor to be explecit and not let this be used as a falsy value (optional)
      const isMetamaskInstalled =
        ethereumProviderInjected && Boolean(window.ethereum.isMetaMask);

      const local = window.localStorage.getItem("metamaskState");

      // user was previously connected, start listening to MM
      if (local) {
        listen();
      }

      // local could be null if not present in LocalStorage
      const { wallet, balance } = local
        ? JSON.parse(local)
        : // backup if local storage is empty
          { wallet: null, balance: null };

      dispatch({ type: "pageLoaded", isMetamaskInstalled, wallet, balance });
    }
  }, []);

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

  return (
    <>
      <h1>Login</h1>

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

      <Wallet />
    </>
  );
}
