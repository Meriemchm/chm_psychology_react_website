import React from "react";
import { AccountSettingsForm } from "../../../Data/Data";
import Selector from "../../../Utilities/Selector/Selector";
import { stateData } from "../../../Data/Data";
const FormSettings = () => {
  return (
    <div>
      <form className="max-w-4xl mx-auto p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {AccountSettingsForm.map(({ id, placeholder, type, label,style }) => {
            let colSpanClass =
              id === 3 ? "col-span-2" : "col-span-2 md:col-span-1";
            return (
              <div key={id} className={`mb-4 ${colSpanClass} ${style} relative `}>
                <label className="font-bold self-start ">{label}</label>
                {id === 4 || id === 5 ? (
                  <div className="absolute  left-0 w-full z-50">
                  <Selector data={stateData} title={placeholder} />
                  </div>
                ) : (
                  <input
                    type={type}
                    className="w-full py-3 px-4 border-2 text-six border-six border-opacity-30 rounded-2xl"
                    placeholder={placeholder}
                  />
                )}
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default FormSettings;
