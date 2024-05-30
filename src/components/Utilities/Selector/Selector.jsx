import React, { useState, useEffect, useMemo } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = ({ title, value, onChange }) => {
  const countriesData = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
  ];

  const [countries, setCountries] = useState(countriesData);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState(value || "");
  const [open, setOpen] = useState(false); // Set initial selected value to the passed value prop

  const filteredCountries = useMemo(
    () =>
      countries.filter((country) =>
        country.toLowerCase().startsWith(inputValue.toLowerCase())
      ),
    [countries, inputValue]
  );

  useEffect(() => {
    // Update the selected value when the value prop changes
    setSelected(value || "");
  }, [value]);

  return (
    <div className="font-medium">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded-xl border-opacity-30 border-2 text-six border-six  ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : title}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter "
            className="placeholder:text-gray-700 p-2 outline-none"
            aria-label="Search for a country"
          />
        </div>
        {filteredCountries.map((country) => (
          <li
            key={country}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              country.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }`}
            onClick={() => {
              setSelected(country);
              onChange(country); // Call the onChange function with the selected country
              setOpen(false);
              setInputValue("");
            }}
            role="option"
            aria-selected={country.toLowerCase() === selected?.toLowerCase()}
          >
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
