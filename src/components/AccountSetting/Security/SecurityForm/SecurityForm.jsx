import React,{useContext} from 'react'
import { SecurityFormData } from "../../../Data/Data";
import { AuthContext } from "../../../../context/AuthContext";

function SecurityForm() {
  const { userData } = useContext(AuthContext);
  return (
    <div>
    <form className="max-w-4xl mx-auto space-y-4">
      <div className="grid grid-cols-1  gap-4">
        {SecurityFormData.map(({ id, placeholder, type, label }) => {

          return (
            <div key={id} className={`mb-2   `}>
              <label className="font-bold self-start ">
                {label}
              </label>
              <input
                type={type}
                className="w-full py-3 px-4 border-2 text-six border-six border-opacity-30 rounded-2xl"
                placeholder={placeholder}
              />
              {
                id === 1 &&(
                  <button className="pt-2 xl:text-base  text-six rounded-3xl  underline">
                  Confirm
                  </button>
                )
              }
            </div>
          );
        })}
      </div>
    </form>
  </div>
  )
}

export default SecurityForm
