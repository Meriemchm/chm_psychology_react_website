import React, { useState, useEffect } from "react";
import SelectionItemForm from "../SelectionItemForm/SelectionItemForm";
import CompleteForm from "../CompleteForm/CompleteForm";
import ProgressBar from "../ProgressBar/ProgressBar";
import InputForm from "../InputForm/InputForm";
import Selector from "../../Utilities/Selector/Selector";
import { GenderType, RelashionshipSituation } from "../../Data/Data";
import { AgeForm } from "../../Data/Data";
import { AccountForm, AccountValidation } from "../../Data/Data";

const MultiStepForm = () => {
  /*progress*/
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(25);

  const nextStep = () => {
    setStep((prevStep) => {
      const newStep = prevStep + 1;
      if (newStep === 4 || newStep === 5) {
        setProgress(99);
      } else {
        setProgress(newStep * 25);
      }
      return newStep;
    });
  };

  const previousStep = () => {
    setStep((prevStep) => {
      const newStep = prevStep - 1;
      if (newStep === 4 || newStep === 5) {
        setProgress(99);
      } else if (newStep === 3) {
        setProgress(75);
      } else {
        setProgress(newStep * 25);
      }
      return newStep;
    });
  };

  useEffect(() => {
    if (step === 6) {
      setProgress(100);
    }
  }, [step]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <ProgressBar progress={progress} />

      {step === 1 || step === 2 || step === 3 ? (
        <div>
          <h1 className="text-3xl font-bold text-center pt-10">
            Find the right therapist
          </h1>
          <p className="w-full md:w-3/4 md:text-base text-sm mx-auto text-center pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            nisi vitae elit fermentum congue non mattis enim. Vestibulum
            interdum iaculis tellus
          </p>
        </div>
      ) : (
        <h1 className="text-3xl font-bold text-center pt-10">Almost there!</h1>
      )}

      {step === 6 && (
        <>
          <h1 className="text-3xl font-bold text-center pt-10">
            Welcome to Rameem!
          </h1>
          <CompleteForm />
        </>
      )}

      {step !== 6 && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-2/3 2xl:w-1/2 xl:px-36 "
        >
          <div className="py-10 rounded-lg shadow-md">
            {step === 1 && (
              <SelectionItemForm
                title="What’s your gender?"
                radioItem={GenderType}
              />
            )}

            {step === 2 && (
              <div className="px-14">
                <label className="  text-lg font-bold self-start mb-2 ">
                  How old are you?
                </label>
                <div className="mt-3">
                <Selector title={AgeForm[0].placeholder} />
                </div>
              </div>
            )}

            {step === 3 && (
              <SelectionItemForm
                title="What is your relationship status?"
                radioItem={RelashionshipSituation}
              />
            )}

            {step === 4 && (
              <InputForm
                Data={AccountForm}
                title="Create an account to save your information"
                action={() => setStep(5)}
              />
            )}
            {step === 5 && (
              <InputForm
                Data={AccountValidation}
                title="We sent a code to your email, type it here:"
                action={() => setStep(6)}
              />
            )}
          </div>
          {step < 4 && (
            <div className="flex justify-between py-10">
              {step > 1 && (
                <button
                  className="xl:text-lg font-medium text-primary rounded-3xl underline "
                  onClick={previousStep}
                >
                  Previous
                </button>
              )}

              <div className="ml-auto">
                <button
                  type="submit"
                  className="bg-primary hover:bg-primaryvariant text-white font-bold py-2 px-5 rounded-lg"
                  onClick={step < 4 ? nextStep : null}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default MultiStepForm;
