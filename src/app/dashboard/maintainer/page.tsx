"use client";

import useGitbountiesContract from "@/hooks/useGitbountiesContract";
import { Contract } from "ethers";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import IssueItem from "./IssueItem";

interface Issue {
  issue_id: number;
  owner: string;
  repo: string;
}

interface GithubIssue {
  author: string;
  description: string;
  title: string;
  issue: Issue;
}

export type createBountyFn = (issue: Issue, reward: number) => Promise<void>;

const mintNFT = async (contract: Contract): Promise<number> => {
  const tx = await contract.mint();
  // console.log('transaction', tx);
  const receipt = await tx.wait();
  // console.log('transaction result', receipt);
  const filter = contract.filters.Transfer(null, null, null);
  const transferEvents = await contract.queryFilter(filter);

  console.log("transferEvents", transferEvents);

  const tokenId = transferEvents[transferEvents.length - 1].topics[3];
  console.log("minted new token with tokenId", tokenId);

  return parseInt(tokenId);
};

export default function Page() {
  const [issues, setIssues] = useState<GithubIssue[]>([]);

  const contract = useGitbountiesContract();
  console.log(contract);

  const createBounty = async (issue: Issue, reward: number): Promise<void> => {
    // mint NFT for user
    const tokenId = await mintNFT(contract);
    console.log("minted token with id", tokenId);

    // TODO DANGER: tokenId is controlled by the API caller
    // double check on backend that wallet address associated with this user is actually the owner of tokenId

    const data = {
      reward: reward,
      token_id: tokenId,
    };

    const query = new URLSearchParams({
      owner: issue.owner,
      repo: issue.repo,
      issue: issue.issue_id.toString(),
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

  if (process.env.NEXT_PUBLIC_USE_DUMMY_API == "true") {
    useEffect(() => {
      setIssues([
        {
          author: "MrPicklePinosaur",
          description: "- [ ] forth\r\n- [ ] golang assembly",
          title: "more languages",
          issue: {
            issue_id: 1,
            owner: "MrPicklePinosaur",
            repo: "advent_of_code",
          },
        },
        {
          author: "MrPicklePinosaur",
          description: "yet another test",
          title: "another test",
          issue: {
            issue_id: 2,
            owner: "gitbounties",
            repo: "sample_repo",
          },
        },
      ]);
    }, []);
  } else {
    useEffect(() => {
      const fetchIssues = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/issue`, {
          method: "get",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        const body: GithubIssue[] = await res.json();

        setIssues(() => body);

        console.log("body", body);
      };

      fetchIssues().catch(console.error);
    }, []);
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Github Username
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Repository and Issue
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {issues.map((item: GithubIssue) => (
                <IssueItem
                  key={item.issue.issue_id}
                  item={item}
                  createBounty={createBounty}
                ></IssueItem>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
