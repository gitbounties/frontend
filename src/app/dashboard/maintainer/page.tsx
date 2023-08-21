"use client";
import React from "react";

export default function Page() {
  const issueItem = (
    name: string,
    username: string,
    pfp: string,
    repository: string,
    issue: string,
    status: boolean,
    closedBy: string,
    money: number
  ) => {
    return (
      <tr>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img className="h-10 w-10 rounded-full" src={pfp} alt="" />
            </div>
            <div className="ml-4">
              <div className="text-sm leading-5 font-medium text-gray-900">
                {name}
              </div>
              <div className="text-sm leading-5 text-gray-500">{username}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">{repository}</div>
          <div className="text-sm leading-5 text-gray-500">{issue}</div>
        </td>

        {status && (
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </td>
        )}
        {!status && (
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
              Closed
            </span>
            <div className="text-sm leading-5 text-gray-500">
              Closed by: {closedBy}
            </div>
          </td>
        )}

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <a className="text-sm leading-5 text-gray-900">{money}</a>
        </td>
        {status && (
          <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
            <a
              href="maintainer/bounty"
              className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
            >
              Convert into a bounty
            </a>
          </td>
        )}
      </tr>
    );
  };

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
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Money
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {issueItem(
                "Helen Zhang",
                "helenzhangyc",
                "https://avatars.githubusercontent.com/u/45017130?s=400&u=fca9f286318fbbe286f7a8c29cc0c040402c6df7&v=4",
                "gitbounties_frontend",
                "dashboard not rendering",
                true,
                "",
                5
              )}
              {issueItem(
                "Daniel Liu",
                "MrPicklePinosaur",
                "https://avatars.githubusercontent.com/u/39071861?v=4",
                "shrs",
                "[Bug]: Nesting shrs breaks exit command",
                false,
                "Melissa1412",
                10
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
