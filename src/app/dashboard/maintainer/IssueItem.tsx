"use client";

import useGitbountiesContract from "@/hooks/useGitbountiesContract";
import { Contract } from "ethers";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import createBountyFn from "./page.tsx";

import "reactjs-popup/dist/index.css";

export default function IssueItem({
  item,
  createBounty,
}: {
  item: GithubIssue;
  createBounty: createBountyFn;
}) {
  const pfp =
    "https://avatars.githubusercontent.com/u/45017130?s=400&u=fca9f286318fbbe286f7a8c29cc0c040402c6df7&v=4";
  const status: "Open" | "Closed" = "Open";

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const { elements } = e.currentTarget;

    const bountyAmount = parseInt(
      (elements.namedItem("bountyAmount") as HTMLInputElement).value
    );

    await createBounty(item.issue, bountyAmount);
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={pfp} alt="" />
          </div>
          <div className="ml-4">
            <div className="text-sm leading-5 font-medium text-gray-900">
              {item.title}
            </div>
            <div className="text-sm leading-5 text-gray-500">{item.author}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">
          {item.issue.owner}
        </div>
        <div className="text-sm leading-5 text-gray-500">{item.issue.repo}</div>
      </td>

      {status == "Open" && (
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Active
          </span>
        </td>
      )}
      {status == "Open" && (
        <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
          <Popup
            trigger={
              <button className="text-indigo-600 hover:text-indigo-900 focus:outline-none">
                Convert into a bounty
              </button>
            }
            position={"right center"}
            modal
            nested
          >
            <a
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              href={`/dashboard/maintainer`}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </a>
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={onSubmit}
            >
              <div style={{ display: "table", width: "100%" }}>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  style={{
                    display: "table-cell",
                    whiteSpace: "nowrap",
                    width: "1px",
                  }}
                >
                  How much money do you want to put in?
                </label>
                <span style={{ display: "table-cell", padding: "0 4px 0 6px" }}>
                  <input
                    type="number"
                    id="bountyAmount"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    style={{ width: "30%", marginLeft: "2%" }}
                  ></input>
                </span>
              </div>
              <div className="block text-gray-700 text-sm font-bold mb-2">
                Gas Fee:{" "}
              </div>
              <button
                type="submit"
                className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                style={{ marginLeft: "45%" }}
              >
                Submit
              </button>
            </form>
          </Popup>
        </td>
      )}
    </tr>
  );
}
