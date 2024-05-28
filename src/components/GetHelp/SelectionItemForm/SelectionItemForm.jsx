import React from "react";
import Radio, { RadioGroup } from "../ProgressForm/Radio";


const SelectionItemForm = ({radioItem}) => {
  return (
    <div className="">
         <RadioGroup >
         {radioItem. map(({ id, title}) => (

            <div key={id} className="flex gap-4 justify-center flex-col py-3">
            <Radio value="free" key={id}>
                {title}
            </Radio>
            </div>
          ))}
      </RadioGroup>

            </div>

  );
};

export default SelectionItemForm;

