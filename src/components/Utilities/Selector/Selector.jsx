import React, { useState, useEffect, useMemo } from "react";
import chevrondown from '../../../assets/chevrondown.svg'
import iconsearchselctor from '../../../assets/iconsearchselctor.svg'

const Selector = ({ title, value, onChange, data }) => {
  const [dataselector, setDataselector] = useState(data);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState(value || "");
  const [open, setOpen] = useState(false);

  const filteredData = useMemo(
    () =>
      dataselector.filter((item) =>
        item.toLowerCase().startsWith(inputValue.toLowerCase())
      ),
    [dataselector, inputValue]
  );

  useEffect(() => {
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
        <img src={chevrondown} className={`${open && "rotate-180"}`} />
      </div>

      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <img src={iconsearchselctor}  size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter "
            className="placeholder:text-gray-700 p-2 outline-none"
            aria-label="Search for a country"
          />
        </div>
        {filteredData.map((item) => (
          <li
            key={item}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              item.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }`}
            onClick={() => {
              setOpen(false); 
              setSelected(item);
              onChange(item);
              setInputValue("");
            }}
            role="option"
            aria-selected={item.toLowerCase() === selected?.toLowerCase()}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
