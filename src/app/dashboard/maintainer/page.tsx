"use client";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function Page() {
  const issueItem = (
    name: string,
    username: string,
    pfp: string,
    repository: string,
    issue: string,
    status: boolean,
    closedBy: string
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
        {status && (
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
              <>
                <div style={{ display: "table", width: "100%" }}>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    style={{
                      display: "table-cell",
                      whiteSpace: "nowrap",
                      width: "1px",
                    }}
                  >
                    How much money do you want to put in?
                  </label>
                  <span
                    style={{ display: "table-cell", padding: "0 4px 0 6px" }}
                  >
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      style={{ width: "30%", marginLeft: "2%" }}
                    ></input>
                  </span>
                </div>
                <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Gas Fee:{" "}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
                  style={{ marginLeft: "45%" }}
                >
                  Submit
                </button>
              </>
            </Popup>
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
                ""
              )}
              {issueItem(
                "Helen Zhang",
                "helenzhangyc",
                "https://avatars.githubusercontent.com/u/45017130?s=400&u=fca9f286318fbbe286f7a8c29cc0c040402c6df7&v=4",
                "shrs",
                "[Bug]: Nesting shrs breaks exit command",
                false,
                "Melissa1412"
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
