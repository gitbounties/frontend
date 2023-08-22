import React, { useEffect, useState } from "react";

export default function MultiStep({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string[];
}) {
  console.log("children", children);

  const [steps, setSteps] = useState(children.length - 1 || 0);
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(Math.min(currentStep + 1, steps));
  };
  const prevStep = () => {
    setCurrentStep(Math.max(currentStep - 1, 0));
  };

  return (
    <>
      <a
        type="button"
        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        href="/dashboard/maintainer"
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
      <p className="text-lg font-bold text-gray-700 leading-tight text-center mt-12 mb-5">
        Step {currentStep + 1}: {title[currentStep]}
      </p>
      {children[currentStep]}
      <nav
        className="inline-flex space-x-2.5"
        style={{ marginLeft: "44%", position: "absolute", bottom: "10%" }}
      >
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={prevStep}
        >
          <div className="flex flex-row align-middle">
            <svg
              className="w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p className="ml-2">Prev</p>
          </div>
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={nextStep}
        >
          <div className="flex flex-row align-middle">
            <span className="mr-2">Next</span>
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
      </nav>
    </>
  );
}
