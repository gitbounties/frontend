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
      className="main bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"
      style={{
        backgroundColor: "white ",
        height: "100vh",
        maxWidth: "100%",
        paddingTop: "20px",
      }}
    >
      <div
        className="wrapper bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            fontFamily: "Hyperion",
            fontSize: 29,
            color: "black",
            display: "flex",
            alignItems: "center",
          }}
        >
          GITBOUNTIES
        </div>
        <div
          style={{
            fontSize: 18,
            color: "black",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link
              href="/dashboard/maintainer"
              className="relative inline-block px-4 py-2 font-medium group "
            >
              <button
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Image
                  src={maintainerIcon}
                  alt=""
                  height={15}
                  width={20}
                  objectFit="contain"
                />
                <span style={{ marginLeft: "5px" }}>Maintainer</span>
              </button>
            </Link>
            <Link
              href="/dashboard/contributor"
              className="relative inline-block px-4 py-2 font-medium group "
            >
              <span
                className="text-white bg-gradient-to-br shadow-xl from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Image
                  src={contributorIcon}
                  alt=""
                  height={15}
                  width={20}
                  objectFit="contain"
                />
                <span style={{ marginLeft: "5px" }}>Contributor</span>
              </span>
            </Link>
          </div>
          <div>
            <div className="user-status-dot-container">
              <div
                className={`user-status-dot ${
                  isAuthenticated ? "signed-in" : "not-signed-in"
                }`}
              ></div>
            </div>
            <span
              style={{
                fontSize: "12px",
                marginLeft: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "-12px",
              }}
            >
              {isAuthenticated ? "Connected" : "Not Connected"}
            </span>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </main>
  );
}
