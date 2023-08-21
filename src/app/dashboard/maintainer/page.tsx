"use client";
import React from "react";

export default function Page() {
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
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://avatars.githubusercontent.com/u/45017130?s=400&u=fca9f286318fbbe286f7a8c29cc0c040402c6df7&v=4"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        Helen Zhang
                      </div>
                      <div className="text-sm leading-5 text-gray-500">
                        helenzhangyc
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    gitbounties_frontend
                  </div>
                  <div className="text-sm leading-5 text-gray-500">
                    Dashboard not rendering
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                  >
                    Convert into a bounty
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://avatars.githubusercontent.com/u/39071861?v=4"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        Daniel Liu
                      </div>
                      <div className="text-sm leading-5 text-gray-500">
                        MrPicklePinosaur
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">shrs</div>
                  <div className="text-sm leading-5 text-gray-500">
                    [Bug]: Nesting shrs breaks exit command
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Closed
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                  >
                    Convert into a bounty
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
