"use client";

import MultiStep from "@/components/Multistep";
import Image from "next/image";
import sampleContributorDashboard from "../../../../public/sampleContributorDashboard.png";
import issuePage from "../../../../public/issuePage.png";
import okay from "../../../../public/okayOnce.gif";
import { IWeb3Context, useWeb3Context } from "@/context/Web3ContextProvider";

export default function Page() {
  const {
    connectWallet,
    disconnect,
    state: { isAuthenticated, address, currentChain, provider },
  } = useWeb3Context() as IWeb3Context;

  return (
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
                marginLeft: "42%",
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
            As a contributor, you must connect to Metamask so you can claim the
            bounties.
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
            Once you have choosed a bounty to work on, click on it and it will
            take you to the actual issue page on Github.
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
  );
}
