import React, { useState } from "react";
import SelectionItemForm from "../SelectionItemForm/SelectionItemForm";
import CompleteForm from "../CompleteForm/CompleteForm";
import ProgressBar from "../ProgressBar/ProgressBar";
import InputForm from "../InputForm/InputForm";
import Selector from "../../Utilities/Selector/Selector";
import { GenderType, RelashionshipSituation } from "../../Data/Data";
import { AgeForm } from "../../Data/Data";
import { AccountForm, AccountValidation, getNumbers } from "../../Data/Data";
import { doc,collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const MultiStepForm = () => {
  /*progress*/
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(25);
  const [showError, setShowError] = useState(false);
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    relationshipStatus: "",
    username: "",
    email: "",
    password: "",
    valid: "",
  });

  const nextStep = () => {
    setShowError(false);
    setStep((prevStep) => {
      const newStep = prevStep + 1;
      if (newStep === 4 || newStep === 5) {
        setProgress(99);
      } else if (newStep === 6) {
        setProgress(100);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) {
      setShowError(true);
      return;
    }
    try {
      const res = await addDoc(collection(db, "users"), {
        gender: formData.gender,
        age: formData.age,
        relationshipStatus: formData.relationshipStatus,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        valid: formData.valid,
      });
      console.log("Document written with ID: ", res.id);
      setStep(6);
      setProgress(100);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  
  const validateStep = () => {
    switch (step) {
      case 1:
        return formData.gender !== "";
      case 2:
        return formData.age !== "";
      case 3:
        return formData.relationshipStatus !== "";
      case 4:
        return (
          formData.username !== "" &&
          formData.email !== "" &&
          formData.password !== ""
        );
      case 5:
        return formData.valid !== "";
      default:
        return true;
    }
  };

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (
      (step === 1 && name === "gender") ||
      (step === 2 && name === "age") ||
      (step === 3 && name === "relationshipStatus") ||
      (step === 4 &&
        formData.username === "" &&
        formData.email === "" &&
        formData.password === "") ||
      (step === 5 && name === "valid")
    ) {
      setShowError(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <ProgressBar progress={progress} />

      {(step === 1 || step === 2 || step === 3) && (
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
      )}

      {(step === 4 || step === 5) && (
        <h1 className="text-3xl font-bold text-center pt-10">Almost there!</h1>
      )}

      {step === 6 && (
        <>
          <h1 className="text-3xl font-bold text-center pt-10">
            <p className="text-sm">{JSON.stringify(formData)}</p>
            Welcome to Rameem!
          </h1>
          <CompleteForm />
        </>
      )}
      {/* form */}
      {step !== 6 && (
        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter" && validateStep()) {
              e.preventDefault();
              nextStep();
            }
          }}
          className="flex flex-col w-full md:w-2/3 2xl:w-1/2 xl:px-36 "
        >
          <div className="py-10 rounded-lg shadow-md">
            {showError && (
              <p className="text-red-400 mb-2 px-14 ">
                Please fill in all required fields before proceeding.
              </p>
            )}

            {step === 1 && (
              <>
                <SelectionItemForm
                  title="What’s your gender?"
                  radioItem={GenderType}
                  selectedValue={formData.gender}
                  onValueChange={(value) => handleChange("gender", value)}
                />
              </>
            )}

            {step === 2 && (
              <div className="px-14">
                <label className="  text-lg font-bold self-start mb-2 ">
                  How old are you?
                </label>
                <div className="mt-3">
                  <Selector
                    data={getNumbers}
                    title={AgeForm[0].placeholder}
                    value={formData.age}
                    onChange={(value) => handleChange("age", value)}
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <SelectionItemForm
                title="What is your relationship status?"
                radioItem={RelashionshipSituation}
                selectedValue={formData.relationshipStatus}
                onValueChange={(value) =>
                  handleChange("relationshipStatus", value)
                }
              />
            )}

            {step === 4 && (
              <InputForm
                Data={AccountForm}
                title="Create an account to save your information"
                action={() => {
                  if (!validateStep()) {
                    setShowError(true);
                  } else {
                    setStep(5);
                  }
                }}
                formData={formData}
                onChange={(name, value) => handleChange(name, value)}
              />
            )}
            {step === 5 && (
              <>
                <InputForm
                  Data={AccountValidation}
                  title="We sent a code to your email, type it here:"
                  action={() => {
                    if (!validateStep()) {
                      setShowError(true);
                    } else {
                      setStep(6);
                      setProgress(100);
                    }
                  }}
                  formData={formData}
                  onChange={(name, value) => handleChange(name, value)}
                />

                <div className="flex flex-col justify-center items-center gap-3">
                  <button
                    type="submit"
                    className="mt-3 bg-primary border-1 border-primary xl:text-xl text-four px-10 xl:px-16 py-3 rounded-3xl font-bold duration-200 hover:scale-105"
                  >
                    Create an account
                  </button>
                </div>
              </>
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
                  type="button"
                  className="bg-primary hover:bg-primaryvariant text-white font-bold py-2 px-5 rounded-lg"
                  onClick={() => {
                    if (!validateStep()) {
                      setShowError(true);
                    } else {
                      nextStep();
                    }
                  }}
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
