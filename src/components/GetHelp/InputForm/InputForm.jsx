import React, { useState } from "react";
import { ButtonValidationForm } from "../../Data/Data";

const InputForm = ({ Data, title, action, formData, onChange }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e, name) => {
    const { value } = e.target;
    onChange(name, value);
    if (name === "username") {
      if (value.length < 4) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Please enter a valid username.",
        }));
      } else {
        setErrors((prevErrors) => {
          const newErrors = { ...prevErrors };
          delete newErrors[name];
          return newErrors;
        });
      }
    }
    if (name === "password") {
      if (value.length < 6) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Password must be at least 6 characters long.",
        }));
      } else {
        setErrors((prevErrors) => {
          const newErrors = { ...prevErrors };
          delete newErrors[name];
          return newErrors;
        });
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Please enter a valid email address.",
        }));
      } else {
        setErrors((prevErrors) => {
          const newErrors = { ...prevErrors };
          delete newErrors[name];
          return newErrors;
        });
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 px-14">
      <label className=" mb-2 text-lg font-bold self-start ">{title}</label>

      {Data.map(({ id, placeholder, type, style, name }) => {
        return (
          <>
            <input
              key={id}
              type={type}
              className={` py-3 px-4 border-2 text-six border-six border-opacity-30 rounded-2xl ${style}`}
              placeholder={placeholder}
              value={formData[name] || ""}
              onChange={(e) => handleChange(e, name)}
            />
            {errors[name] && (
              <span className="text-red-500 self-start">{errors[name]}</span>
            )}
          </>
        );
      })}

      {title == "Create an account to save your information" && (
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-six text-center">
            By creating an account, you agree to our
            <span className="underline"> Privacy Policy </span>
            and
            <span className="underline"> Terms of Service </span>.
          </p>

          <button
            onClick={action}
            disabled={Object.keys(errors).length > 0}
            className="bg-primary border-1 border-primary xl:text-xl text-four px-10 xl:px-16 py-3 rounded-2xl font-bold duration-200 hover:scale-105"
          >
            Continue
          </button>
          <p>
            Already have an account?{" "}
            <span className="text-primary">Log In!</span>{" "}
          </p>
        </div>
      )}

      {title == "We sent a code to your email, type it here:" && (
        <div className="flex flex-col justify-center items-center gap-3">
          <button
            type="submit"
            className="mt-3 bg-primary border-1 border-primary xl:text-xl text-four px-10 xl:px-16 py-3 rounded-3xl font-bold duration-200 hover:scale-105"
          >
            Create an account
          </button>
          {ButtonValidationForm.map(({ id, title }) => (
            <div className="flex flex-col" key={id}>
              <button className="bg-white border-2 border-primary xl:text-base text-primary px-5 xl:px-10 py-3 w-64 rounded-3xl duration-200 hover:scale-105">
                {title}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputForm;
