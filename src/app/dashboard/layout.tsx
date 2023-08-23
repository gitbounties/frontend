"use client";

import "./style.css";
import Link from "next/link";
import Image from "next/image";
import maintainerIcon from "../../../public/maintainer.svg";
import contributorIcon from "../../../public/contributor.svg";
import { IWeb3Context, useWeb3Context } from "@/context/Web3ContextProvider";
import React from "react";
import Popup from "reactjs-popup";
import MultiStep from "@/components/Multistep";
import sampleMaintainerDashboard from "../../../public/sampleMaintainerDashboard.png";
import bountyConvert from "../../../public/bountyConvert.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  const {
    connectWallet,
    disconnect,
    state: { isAuthenticated, address, currentChain, provider },
  } = useWeb3Context() as IWeb3Context;

  return (
    <main
      className="main"
      style={{
        backgroundColor: "white",
        height: "100vh",
        maxWidth: "100%",
      }}
    >
      <div className="wrapper">
        <div
          style={{
            fontFamily: "Hyperion",
            fontSize: 20,
            color: "black",
            display: "flex",
          }}
        >
          GITBOUNTIES
        </div>
        <div
          style={{
            fontSize: 12,
            color: "black",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>Address: {address}</div>
          <div style={{ display: "flex" }}>
            <Link
              href="/dashboard/maintainer"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <button
                className="relative text-black group-hover:text-white"
                style={{ display: "flex" }}
              >
                <Image
                  src={maintainerIcon}
                  alt={""}
                  height={15}
                  width={20}
                  objectFit="contain"
                />
                Maintainer
              </button>
            </Link>
            <Link
              href="/dashboard/contributor"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span
                className="relative text-black group-hover:text-white"
                style={{ display: "flex" }}
              >
                <Image
                  src={contributorIcon}
                  alt={""}
                  height={15}
                  width={20}
                  objectFit="contain"
                />
                Contributor
              </span>
            </Link>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </main>
  );
}
