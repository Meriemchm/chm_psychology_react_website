import React, { useContext } from "react";
import { AccountSettingsForm } from "../../../Data/Data";
import Selector from "../../../Utilities/Selector/Selector";
import { stateData } from "../../../Data/Data";
import { AuthContext } from "../../../../context/AuthContext";
const FormSettings = () => {
  const { userData } = useContext(AuthContext);
  return (
    <div>
      <form className="max-w-4xl mx-auto p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-1">
          {AccountSettingsForm.map(
            ({ id, placeholder, type, label, style }) => {
              let value = "";
              let colSpanClass =
                id === 3 || id === 1
                  ? "col-span-2"
                  : "col-span-2 md:col-span-1";
              if (label.toLowerCase() === "username") {
                value = userData.length > 0 ? userData[0]?.username : "";
              }

              return (
                <div
                  key={id}
                  className={`mb-4 ${colSpanClass} ${style} relative `}
                >
                  <label className="font-bold self-start  ">{label}</label>
                  {id === 4 || id === 5 ? (
                    <div className="absolute left-0 w-full z-50">
                      <Selector data={stateData} title={placeholder} />
                    </div>
                  ) : (
                    <input
                      type={type}
                      className="w-full py-3 px-4 border-2 text-six border-six border-opacity-30 rounded-2xl"
                      placeholder={placeholder}
                      defaultValue={value}
                      readOnly={label.toLowerCase() === "country"}
                    />
                  )}
                </div>
              );
            }
          )}
        </div>
      </form>
    </div>
  );
};

export default FormSettings;
