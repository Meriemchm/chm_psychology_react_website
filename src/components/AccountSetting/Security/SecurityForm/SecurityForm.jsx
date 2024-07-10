import React, { useContext, useState } from "react";
import { SecurityFormData } from "../../../Data/Data";
import { AuthContext } from "../../../../context/AuthContext";
import ButtonsSettings from "../../ButtonsSettings/ButtonsSettings";

function SecurityForm() {
  const { userData } = useContext(AuthContext);
  const [formValues, setFormValues] = useState({
    phonenumber: "",
    email: userData?.email || "",
    newpassword: "",
    currentpassword: "",
    repeatpassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValues.newpassword || !formValues.repeatpassword) {
      setErrors({
        newpassword: "Please enter a new password",
        repeatpassword: "Please repeat your new password",
      });
      return;
    }
    if (formValues.newpassword !== formValues.repeatpassword) {
      setErrors({
        repeatpassword: "Passwords do not match",
      });
      return;
    }

    if (
      formValues.newpassword &&
      !formValues.repeatpassword 
    ) {
      setErrors({
        repeatpassword: "Please repeat your new password",
        currentpassword: "Please enter your current password",
      });
      return;
    }
    
    if (
      !formValues.currentpassword
    ) {
      setErrors({
        currentpassword: "Please enter your current password",
      });
      return;
    }
  };

  return (
    <div>
      <form className="max-w-4xl mx-auto space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4">
          {SecurityFormData.map(({ id, placeholder, type, label }) => {
            let value = formValues[label.toLowerCase()] || "";
            return (
              <div key={id} className="mb-2">
                <label className="font-bold self-start">{label}</label>
                <input
                  type={type}
                  className="w-full py-3 px-4 border-2 text-six border-six border-opacity-30 rounded-2xl"
                  placeholder={placeholder}
                  value={value}
                  onChange={(e) =>
                    handleChange(label.toLowerCase(), e.target.value)
                  }
                />
                {errors[label.toLowerCase()] && (
                  <p className="text-red-500 text-sm">
                    {errors[label.toLowerCase()]}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <ButtonsSettings />
      </form>
    </div>
  );
}

export default SecurityForm;
