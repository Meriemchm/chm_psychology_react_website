import React, { useState } from "react";
import Radio, { RadioGroup } from "./Radio";

const SelectionItemForm = ({ radioItem, title }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="px-14">
      <label className="block mb-2 text-lg font-bold">{title}</label>
      <RadioGroup value={selectedValue} onChange={handleChange}>
        {radioItem.map(({ id, title }) => (
          <div key={id} className="flex flex-col py-3">
            <Radio value={title} key={id}>
              {title}
            </Radio>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default SelectionItemForm;
