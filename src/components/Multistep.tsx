import React, { useEffect, useState } from "react";
import NextNProgress from "nextjs-progressbar";
import "src/app/globals.css";

export default function MultiStep({
  children,
  title,
  who,
}: {
  children: React.ReactNode;
  title: string[];
  who: string;
}) {
  console.log("children", children);

  const NextNProgressClient = () => {
    return <NextNProgress />;
  };

  const [steps, setSteps] = useState(children.length - 1 || 0);
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(Math.min(currentStep + 1, steps));
  };
  const prevStep = () => {
    setCurrentStep(Math.max(currentStep - 1, 0));
  };

  const ProgressBar = ({
    progressPercentage,
  }: {
    progressPercentage: number;
  }) => {
    return (
      <div className="h-1 w-full bg-gray-300">
        <div
          style={{ width: `${progressPercentage}%` }}
          className={`h-full ${"bg-indigo-700"}`}
        ></div>
      </div>
    );
  };

  return (
    <>
      <a
        type="button"
        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        href={`/dashboard/${who.toLowerCase()}`}
      >
        <span className="sr-only">Close menu</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </a>
      <h1
        className="text-lg font-bold  leading-tight text-center mt-12 mb-5 gradient__text"
        style={{
          fontSize: "30px",
        }}
      >
        Step {currentStep + 1}: {title[currentStep]}
      </h1>
      <ProgressBar
        progressPercentage={(100 / children.length) * (currentStep + 1)}
      ></ProgressBar>
      {children[currentStep]}
      <nav
        className="inline-flex space-x-2.5"
        style={{ marginLeft: "42%", position: "absolute", bottom: "5%" }}
      >
        {currentStep != 0 && (
          <button
            className="text-white bg-gradient-to-br shadow-xl align-middle from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={prevStep}
          >
            <div className="flex flex-row align-middle">
              <svg
                className="w-5 h-5 transform rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
          </button>
        )}
        {currentStep == 0 && (
          <button
            style={{ opacity: 0 }}
            className="text-white bg-gradient-to-br shadow-xl  align-middle from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={prevStep}
          >
            <div className="flex flex-row align-middle">
              <svg
                className="w-5 h-5 transform rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
          </button>
        )}
        {currentStep != children.length - 1 && (
          <button
            className="text-white bg-gradient-to-br shadow-xl align-middle from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={nextStep}
          >
            <div className="flex flex-row align-middle">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
          </button>
        )}
        {currentStep == children.length - 1 && (
          <button
            className="text-white bg-gradient-to-br shadow-xl  align-middle from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={nextStep}
          >
            <div className="flex flex-row align-middle">
              <a className="mr-2" href={`/dashboard/${who.toLowerCase()}`}>
                Go to {who} Page
              </a>
              <svg
                className="w-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
        )}
      </nav>
    </>
  );
}
