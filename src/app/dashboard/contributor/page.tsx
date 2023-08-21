"use client";
import Data from "./issueInformation.json";
import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="flex mt-10 border-2 border-grey-300 w-full max-w-md">
        <input
          className="w-full px-4 py-2 text-sm focus:outline-none"
          style={{ width: "100%" }}
          placeholder="Search for the project you want to work on"
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className="flex items-center justify-center px-4 bg-gray-300">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div>
        {Data.filter((post) => {
          if (query === "") {
            return post;
          } else if (
            post.repository.toLowerCase().includes(query.toLowerCase()) ||
            post.dateCreated.toLowerCase().includes(query.toLowerCase()) ||
            post.money.toLowerCase().includes(query.toLowerCase())
          ) {
            return post;
          }
        }).map((post) => (
          <div
            style={{
              textAlign: "left",
              border: "black ridge 1px",
              borderRadius: "10px",
              margin: "3px",
              width: "20rem",
              paddingLeft: "10px",
            }}
          >
            <p>Repository: {post.repository}</p>
            <p>Date Created: {post.dateCreated}</p>
            <p>Money: {post.money}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
