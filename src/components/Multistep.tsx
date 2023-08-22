import React, { useEffect, useState } from "react";

export default function MultiStep({ children }: { children: React.ReactNode }) {
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
      <p>page {currentStep}</p>
      {children[currentStep]}
      <button onClick={nextStep}>next</button>
      <button onClick={prevStep}>prev</button>
    </>
  );
}
