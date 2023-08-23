"use client";
import Data from "./issueInformation.json";
import { useState } from "react";
import Popup from "reactjs-popup";
import MultiStep from "@/components/Multistep";
import sampleContributorDashboard from "../../../../public/sampleContributorDashboard.png";
import issuePage from "../../../../public/issuePage.png";
import okay from "../../../../public/okayOnce.gif";
import { IWeb3Context, useWeb3Context } from "@/context/Web3ContextProvider";
import Image from "next/image";

export default function App() {
  const [query, setQuery] = useState("");

  const {
    connectWallet,
    disconnect,
    state: { isAuthenticated, address, currentChain, provider },
  } = useWeb3Context() as IWeb3Context;

  const issueItem = (
    owner: string,
    repository: string,
    user: string,
    reward: string,
    // we don't need status because all the issues here should be open
    title: string,
    label: string,
    description: string,
    dateCreated: string,
    pfp: string
  ) => {
    return (
      <tr
        className="hover:bg-neutral-100 rounded-2xl mr-80 border-spacing-1 border rounded-lg overflow-hidden dark:border-gray-70 border-collapse"
        style={{ cursor: "pointer", textAlign: "center" }}
        onClick={(e) => {
          window.location.href =
            "https://github.com/MrPicklePinosaur/shrs/issues/240";
        }}
      >
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img className="h-10 w-10 rounded-full" src={pfp} alt="" />
            </div>
            <div className="ml-4">
              <div className="text-sm leading-5 font-medium text-gray-900">
                {user}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200  ">
          <div className="text-sm leading-5 text-gray-900">
            {owner}/{repository}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
          <div className="text-sm leading-5 text-gray-900">
            [{label}]{title}
          </div>
          <div className="text-sm leading-5 text-gray-500">{description}</div>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
          <div className="text-sm leading-5 text-gray-900">{dateCreated}</div>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">
            {reward.toString()}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="flex mt-10 border-2 border-grey-300 w-full max-w-md  rounded-md  justify-end">
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
                "Browse Bounties",
                "Choose a Bounty to work on",
                "Create PR",
                "Wait for the Owner of the Repo to Merge PR",
                "Claim Reward",
              ]}
              who="Contributor"
            >
              {
                // Step 1: connect to metamask
              }
              <>
                <div
                  className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8"
                  style={{
                    alignItems: "center",
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "center",
                    height: "90%",
                    width: "70%",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                >
                  {/* <button>Connect to Metamask</button> */}
                  {!isAuthenticated ? (
                    <button
                      type="button"
                      onClick={connectWallet}
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
                  ) : (
                    <div
                      style={{
                        alignItems: "center",
                        flexDirection: "column",
                        display: "flex",
                        justifyContent: "center",
                        height: "90%",
                        width: "70%",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      <Image
                        src={okay}
                        alt="Connected"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                      <p> Connected</p>
                      <br></br>
                      <br></br>
                      <p>Address: {address}</p>
                    </div>
                  )}

                  <div
                    style={{
                      display: "block",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    As a contributor, you must connect to Metamask so you can
                    claim the bounties.
                  </div>
                </div>
              </>
              <>
                {/* Step 3: Browse Bounties */}
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
                  <div>You can browse all the active issues to work on.</div>
                  <div className="border-4 border-indigo-600 ...">
                    <Image
                      src={sampleContributorDashboard}
                      alt={""}
                      width={sampleContributorDashboard.width}
                      height={sampleContributorDashboard.height}
                    />
                  </div>
                </div>
              </>
              <>
                {/* Step 4: Create PR */}
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
                    Once you have choosed a bounty to work on, click on it and
                    it will take you to the actual issue page on Github.
                    <div className="border-4 border-indigo-600 ...">
                      <Image
                        src={issuePage}
                        alt={""}
                        width={issuePage.width * 0.4}
                        height={issuePage.height * 0.4}
                      />
                    </div>
                    <br />
                    After you solved the issue, create a PR and make sure to{" "}
                    <b>REFERENCE THE ORIGINAL ISSUE</b>
                    <br />
                    Click{" "}
                    <a
                      href="https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue"
                      className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    >
                      here
                    </a>{" "}
                    for more details.
                  </div>
                </div>
              </>
              <>
                {/* Step 5: Wait for the Owner of the Repo to merge PR */}
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
                  <div>Wait for the Owner of the Repo to merge PR</div>
                </div>
              </>
              <>
                {/* Step 6: Claim Reward */}
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
        <input
          type="text"
          name="hs-table-search"
          id="hs-table-search"
          className="p-3 pl-10 block w-full border-gray-200  text-sm focus:border-fuchsia-500 focus:ring-fuchsia-500  dark:border-gray-70 dark:text-gray-400 paddingBottom-20"
          style={{ width: "100%" }}
          placeholder="Search for the project you want to work on"
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className="flex items-center justify-center px-4 bg-gray-300 border-gray-200 ml-0.5">
          <svg
            className="h-4.5 w-4.5 text-gray-400 "
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
      <br></br>

      <div>
        <div className="flex flex-col">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 ">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200 relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                  Issues
                  <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                    Browse a list of issues that are active and need to be
                    worked on.
                  </p>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th className="px-6 py-3 border-b border-gray-500 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Github Username
                    </th>
                    <th className="px-6 py-3 border-bborder-gray-500 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Repository
                    </th>
                    <th className="px-6 py-3 border-b border-gray-500 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Issue
                    </th>
                    <th className="px-6 py-3 border-b border-gray-500 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Date Created
                    </th>
                    <th className="px-6 py-3 border-b border-gray-500 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Reward
                    </th>
                  </tr>
                </thead>
                {Data.filter((post) => {
                  if (query === "") {
                    return post;
                  } else if (
                    post.owner.toLowerCase().includes(query.toLowerCase()) ||
                    post.repository
                      .toLowerCase()
                      .includes(query.toLowerCase()) ||
                    post.user.toLowerCase().includes(query.toLowerCase()) ||
                    post.reward.toLowerCase().includes(query.toLowerCase()) ||
                    post.title.toLowerCase().includes(query.toLowerCase()) ||
                    post.label.toLowerCase().includes(query.toLowerCase()) ||
                    post.description
                      .toLowerCase()
                      .includes(query.toLowerCase()) ||
                    post.dateCreated.toLowerCase().includes(query.toLowerCase())
                  ) {
                    return post;
                  }
                }).map((post) => (
                  // <div
                  //   style={{
                  //     textAlign: "left",
                  //     border: "black ridge 1px",
                  //     borderRadius: "10px",
                  //     margin: "3px",
                  //     // width: "20rem",
                  //     paddingLeft: "10px",
                  //   }}
                  // >

                  <tbody className="bg-white" style={{ width: "100%" }}>
                    {issueItem(
                      post.owner,
                      post.repository,
                      post.user,
                      post.reward,
                      post.title,
                      post.label,
                      post.description,
                      post.dateCreated,
                      "https://avatars.githubusercontent.com/u/45017130?s=400&u=fca9f286318fbbe286f7a8c29cc0c040402c6df7&v=4"
                    )}
                  </tbody>
                  // </div>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
