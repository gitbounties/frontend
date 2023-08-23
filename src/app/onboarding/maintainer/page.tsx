"use client";
import MultiStep from "@/components/Multistep";
import Image from "next/image";
import sampleMaintainerDashboard from "../../../../public/sampleMaintainerDashboard.png";
import bountyConvert from "../../../../public/bountyConvert.png";

export default function Page() {
  return (
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
              marginLeft: "42%",
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
            As a maintainer, it is strongly recommended to connect to Metamask
            since it allows you to create a bounty and put rewards in it.
          </div>
        </div>
      </>
      <>
        {/* Step 2: Install Github App */}
        <div
          className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8 multi-step-content"
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
          className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8 multi-step-content"
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
            You can browse your own github issues and turn them into bounties.
            <br />
            Below is an example of a dashboard for a maintainer. As you can see,
            the first issue is Active, so you can convert it into a bounty by
            clicking the "Convert into a bounty" button on the right. (More
            details on this will be explained in the next step)
            <br />
            The second issue is closed, which means you cannot convert it into a
            bounty.
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
          className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8 multi-step-content"
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
            Once you clicked on "Convert into a bounty", there will be a popup
            showing on the screen asking you how much reward you want to put in
            (Note that there will be a gas fee included as well). Once you
            submitted this popup, the money will be deducted from your Metamask
            wallet and now you succesfully converted an issue into a bounty!
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
          className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8 multi-step-content"
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
          className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8 multi-step-content"
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
  );
}
