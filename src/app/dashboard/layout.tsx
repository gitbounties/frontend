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
      className="main bg-gradient-to-r gradient__bg rounded-lg opacity-100"
      style={{
        backgroundColor: "white ",
        height: "100vh",
        maxWidth: "200%",
        // width: "100%",
        paddingTop: "20px",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        overflow: "auto",
      }}
    >
      <div
        className="wrapper bg-gradient-to-r opacity-100"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          backgroundColor: "#040C17",
        }}
      >
        <div className="header-content">
          <h1
            className="gradient__text"
            style={{
              fontFamily: "Segoe UI, Noto Sans, Helvetica, Arial, san-serif",
            }}
          >
            GITBOUNTIES
          </h1>
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
                className="text-white bg-gradient-to-br  shadow-xl  shadow-cyan-200/50 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
              <button
                className="text-white bg-gradient-to-br shadow-xl shadow-cyan-200/50 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
              </button>
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
                marginTop: "-14px",
                color: "white",
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
