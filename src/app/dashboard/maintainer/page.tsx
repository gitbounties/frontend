"use client";

import useGitbountiesContract from "@/hooks/useGitbountiesContract";
import { Contract } from "ethers";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import IssueItem from "./IssueItem";
import Image from "next/image";
import MultiStep from "@/components/Multistep";
import sampleMaintainerDashboard from "../../../../public/sampleMaintainerDashboard.png";
import bountyConvert from "../../../../public/bountyConvert.png";

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
      <Popup
        trigger={
          <button
            className="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800"
            style={{ position: "absolute", right: 0 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
          </button>
        }
        position={"right center"}
        modal
        nested
        contentStyle={{ width: "80%", height: "100%" }}
      >
        <>
          <MultiStep
            title={[
              "Connect to Metamask",
              "Install Github App",
              "Browse Issues",
              "Convert into a Bounty",
              "Contributor Creates PR",
              "You Merge PR",
              "Contributor Gets Paid",
            ]}
            who="Maintainer"
          >
            {
              // Step 1: connect to metamask
            }
            <>
              <div
                className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8"
                style={{
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                  height: "90%",
                  width: "70%",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                {/* <button>Connect to Metamask</button> */}
                <button
                  type="button"
                  className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
                  style={{
                    display: "block",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "40%",
                  }}
                >
                  Connect to Metamask
                </button>
                <div
                  style={{
                    display: "block",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  As a maintainer, it is strongly recommended to connect to
                  Metamask since it allows you to create a bounty and put
                  rewards in it.
                </div>
              </div>
            </>
            <>
              {/* Step 2: Install Github App */}
              <div
                className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8"
                style={{
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                  height: "90%",
                  width: "70%",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                <div style={{ textAlign: "center" }}>Install Github App</div>
              </div>
            </>
            <>
              {/* Step 3: Browse Issues */}
              <div
                className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8"
                style={{
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                  height: "90%",
                  width: "70%",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                <div>
                  You can browse your own github issues and turn them into
                  bounties.
                  <br />
                  Below is an example of a dashboard for a maintainer. As you
                  can see, the first issue is Active, so you can convert it into
                  a bounty by clicking the "Convert into a bounty" button on the
                  right. (More details on this will be explained in the next
                  step)
                  <br />
                  The second issue is closed, which means you cannot convert it
                  into a bounty.
                </div>
                <div className="border-4 border-indigo-600 ...">
                  <Image
                    src={sampleMaintainerDashboard}
                    alt={""}
                    width={sampleMaintainerDashboard.width}
                    height={sampleMaintainerDashboard.height}
                  />
                </div>
              </div>
            </>
            <>
              {/* Step 4: Convert into a bounty*/}
              <div
                className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8"
                style={{
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                  height: "90%",
                  width: "70%",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                <div>
                  Once you clicked on "Convert into a bounty", there will be a
                  popup showing on the screen asking you how much reward you
                  want to put in (Note that there will be a gas fee included as
                  well). Once you submitted this popup, the money will be
                  deducted from your Metamask wallet and now you succesfully
                  converted an issue into a bounty!
                </div>
                <div className="border-4 border-indigo-600 ...">
                  <Image
                    src={bountyConvert}
                    alt={""}
                    width={bountyConvert.width}
                    height={bountyConvert.height}
                  />
                </div>
              </div>
            </>
            <>
              {/* Step 5: Contributor creates PR */}
              <div
                className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8"
                style={{
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                  height: "90%",
                  width: "70%",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                <div>Contributor creates PR</div>
              </div>
            </>
            <>
              {/* Step 6: You Merge PR */}
              <div
                className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8"
                style={{
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                  height: "90%",
                  width: "70%",
                  fontFamily: "Open Sans, sans-serif",
                }}
              ></div>
            </>
            <>
              {/* Step 7: Contributor Gets Paid */}
              <div
                className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8"
                style={{
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                  height: "90%",
                  width: "70%",
                  fontFamily: "Open Sans, sans-serif",
                }}
              ></div>
            </>
          </MultiStep>
        </>
      </Popup>
      <div
        className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        style={{ maxWidth: "80%", marginLeft: "10%" }}
      >
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
