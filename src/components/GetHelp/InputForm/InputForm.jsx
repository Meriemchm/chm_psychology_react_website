import React from "react";



const InputForm = ({title}) => {
  return (
    <div >
        <label className="block mb-2 text-lg font-bold">{title}</label>
        <input
            type="email"
            className="w-full py-2 px-4 border-2 border-six rounded-lg mb-4"
            placeholder='Your full name or nickname...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
    </div>

  );
};

export default InputForm;

