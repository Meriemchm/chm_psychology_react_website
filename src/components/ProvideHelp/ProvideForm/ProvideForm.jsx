import React from "react";
import { formItem } from "../../Data/Data";
import rameemLogo from "../../../assets/rameem-logo.svg";

const ProvideForm = () => {
  const client = "";
  const inputItem = formItem.filter((item) => item.categorie === "input");
  const areaItem = formItem.filter((item) => item.categorie === "textarea");
  const endElemnt = inputItem.slice(-1)[0];
  return (
    <div className="flex flex-col  justify-center items-center  md:w-full lg:px-0 ">
      <p className=" mb-5 text-2xl md:text-3xl self-center font-bold">
        Provide Support !
      </p>
      <div className="rounded-lg shadow-md md:p-20 p-4">
        <form
          method="POST"
          className="flex flex-col w-full justify-center mt-5 gap-4"
        >
          <div className="flex gap-3  ">
            {inputItem.slice(0, 2).map((item, id) => {
              return (
                <input
                  key={id}
                  type={item.type}
                  name={item.name}
                  autoComplete="off"
                  placeholder={item.placeholder}
                  required
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              );
            })}
          </div>

          <input
            key={endElemnt.id}
            type={endElemnt.type}
            name={endElemnt.name}
            autoComplete="off"
            placeholder={endElemnt.placeholder}
            required
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          {areaItem.map((item, id) => {
            return (
              <textarea
                key={id}
                name={item.name}
                placeholder={item.placeholder}
                rows="10"
                autoComplete="off"
                required
                style={{ resize: "none" }}
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            );
          })}

          <button className="text-white text-lg bg-primary px-10 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProvideForm;
