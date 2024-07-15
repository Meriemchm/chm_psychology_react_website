import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import SelectionItemForm from "../SelectionItemForm/SelectionItemForm";
import CompleteForm from "../../CompleteRegister/CompleteForm/CompleteForm";
import ProgressBar from "../ProgressBar/ProgressBar";
import InputForm from "../InputForm/InputForm";
import Selector from "../../Utilities/Selector/Selector";
import { GenderType, RelashionshipSituation } from "../../Data/Data";
import { AccountForm, AccountValidation, getNumbers } from "../../Data/Data";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
const MultiStepForm = () => {
  const { dispatch } = useContext(AuthContext);
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(25);
  const [showError, setShowError] = useState(false);
  const navigate= useNavigate()

  //formTest is used for testing some input
  const [formTest, setFormTest] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    relationship_status: "",
    email: "",
    password: "",
    birthdate: "",
    genre: "",
  });

  //functions
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

  const validateStep = () => {
    switch (step) {
      case 1:
        return formData.genre !== "";
      case 2:
        return formData.birthdate !== "";
      case 3:
        return formData.relationship_status !== "";
      case 4:
        return (
          formData.username !== "" &&
          formData.email !== "" &&
          formData.password !== ""
        );
      // case 5:
      //   return formData.valid !== "";
      default:
        return true;
    }
  };

  // const calculateAge = (birthdate) => {
  //   const birthDate = new Date(birthdate);
  //   const today = new Date();
  //   let age = today.getFullYear() - birthDate.getFullYear();
  //   const monthDifference = today.getMonth() - birthDate.getMonth();
  //   if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
  //     age--;
  //   }
  //   return age;
  // };

  //requests
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) {
      setShowError(true);
      return;
    }
    try {
      
      const responseRegister = await axios.post("/api/api/users/register", {
        ...formData,
      });

      const response = await axios.post("/api/api/users/login", {
        email: formData.email,
        password: formData.password,
      });

      const { user, psychologist, token } = response.data;
      const users = user || psychologist;

      const decodedToken = decodeToken(token);

      const role = decodedToken.role;
      const isTokenExpired = isExpired(token);

      dispatch({ type: "LOGIN", payload: { users, token, role } });
      localStorage.setItem("role", JSON.stringify(role));
      localStorage.setItem("user", JSON.stringify(users));
      localStorage.setItem("token", token);

      navigate('/completeRegister')

    } catch (error) {
      console.error("Error registering user: ", error);
    }
  };

  const handleChange = (name, value) => {
    if (name !== "valid") {
      setFormData((prevData) => {
        // if (name === "birthdate") {
        //   const age = calculateAge(value);
        //   return { ...prevData, [name]: value, age: age.toString() };
        // }
        return { ...prevData, [name]: value };
      });
    } else {
      setFormTest({ [name]: value });
    }
    if (
      (step === 1 && name === "genre") ||
      (step === 2 && name === "birthdate") ||
      (step === 3 && name === "relationship_status") ||
      (step === 4 &&
        formData.username === "" &&
        formData.email === "" &&
        formData.password === "")
      // (step === 5 && name === "valid")
    ) {
      setShowError(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <ProgressBar progress={progress} />

      {(step === 1 || step === 2 || step === 3) && (
        <div>
          <h1 className="text-xl md:text-3xl font-bold text-center pt-10">
            Find the right therapist
          </h1>
        </div>
      )}

      {(step === 4 || step === 5) && (
        <h1 className="text-3xl font-bold text-center pt-10">Almost there!</h1>
      )}

      {step !== 6 && (
        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter" && validateStep()) {
              e.preventDefault();
              nextStep();
            }
          }}
          className="flex flex-col w-full md:w-2/3 2xl:w-1/2 xl:px-36"
        >
          <div className="py-10 rounded-lg shadow-md">
            {showError && (
              <p className="text-red-400 mb-2 md:px-14 px-5">
                Please fill in all required fields before proceeding.
              </p>
            )}

            {step === 1 && (
              <SelectionItemForm
                title="What’s your gender?"
                radioItem={GenderType}
                selectedValue={formData.genre}
                onValueChange={(value) => handleChange("genre", value)}
              />
            )}

            {step === 2 && (
              <div className="md:px-14 px-5">
                <label
                  htmlFor="birthday"
                  className="text-lg font-bold self-start mb-2"
                >
                  What is your birthday date?
                </label>
                <div className="mt-3">
                  <input
                    id="birthday"
                    type="date"
                    className="py-3 px-4 border-2 text-six border-six border-opacity-30 rounded-2xl w-full "
                    value={formData.birthdate}
                    onChange={(e) => handleChange("birthdate", e.target.value)}
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <SelectionItemForm
                title="What is your relationship status?"
                radioItem={RelashionshipSituation}
                selectedValue={formData.relationship_status}
                onValueChange={(value) =>
                  handleChange("relationship_status", value)
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
              <InputForm
                Data={AccountValidation}
                title="We sent a code to your email, type it here:"
                formData={formTest}
                onChange={(name, value) => handleChange(name, value)}
              />
            )}
          </div>
          {step < 4 && (
            <div className="flex justify-between py-10">
              {step > 1 && (
                <button
                  className="xl:text-lg font-medium text-primary rounded-3xl underline"
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
