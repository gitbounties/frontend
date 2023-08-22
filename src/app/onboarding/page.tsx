"use client";

// import { useState } from "react";

export default function Page() {
  let currentStep = 0;

  const steps = [
    {
      title: "Welcome to Our App!",
      content: "We're excited to have you on board. Let's get started!",
    },
    {
      title: "Step 2",
      content: "This is the second step of the onboarding process.",
    },
    {
      title: "Step 3",
      content: "Here comes the third step. Almost there!",
    },
    // Add more steps as needed
  ];

  // const [slide, setSlide] = useState();
  const renderText = (stepIndex: number) => {
    if (currentStep >= steps.length) {
      alert("Onboarding completed!");
    }
    return (
      <>
        <h1>{steps[stepIndex].title}</h1>
        <p>{steps[stepIndex].content}</p>
      </>
    );
  };

  return (
    <>
      <title>Onboarding Slide</title>
      <body>
        <div className="onboarding-container">
          <div className="slide"></div>
          {renderText(currentStep)}
          <button
            id="nextBtn"
            onClick={(e) => {
              currentStep++;
            }}
          >
            Next
          </button>
        </div>
      </body>
    </>
  );
}
