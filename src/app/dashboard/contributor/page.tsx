"use client";
import Data from "./issueInformation.json";
import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");

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
      <div className="flex mt-10 border-2 border-grey-300 w-full max-w-md  rounded-md">
        <input
          className="p-3 pl-10 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500  dark:border-gray-70 dark:text-gray-400"
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
                      Repository
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Issue
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Date Created
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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

                  <tbody className="bg-white">
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
