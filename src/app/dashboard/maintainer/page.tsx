"use client";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import MultiStep from "@/components/Multistep";
import Image from "next/image";
import sampleMaintainerDashboard from "../../../../public/sampleMaintainerDashboard.png";
import bountyConvert from "../../../../public/bountyConvert.png";

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
