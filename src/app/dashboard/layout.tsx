import "./style.css";
import type { ReactNode } from "react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="main"
      style={{ backgroundColor: "black", height: "100vh", maxWidth: "100%" }}
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
        <div style={{ display: "flex" }}>
          <Link
            href="/dashboard/maintainer"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              Maintainer
            </span>
          </Link>
          <Link
            href="/dashboard/contributor"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              Contributor
            </span>
          </Link>
        </div>
        <div>{children}</div>
      </div>
    </main>
  );
}
