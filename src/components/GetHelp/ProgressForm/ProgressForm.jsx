import React, { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [relationshipStatus, setRelationshipStatus] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [progress, setProgress] = useState(0);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
    setProgress((prevProgress) => prevProgress + 25);
  };

  const previousStep = () => {
    setStep((prevStep) => prevStep - 1);
    setProgress((prevProgress) => prevProgress - 25);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className='flex flex-col items-center justify-center'>
                <div className="w-full h-2 bg-gray-300 rounded-full">
          <div
            className="h-full bg-primary rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
    <div className="mx-auto my-8 p-6  rounded-lg shadow-md">
      <div className="mb-4">

      </div>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <label className="block mb-2 text-lg font-bold">Gender:</label>
            <input
              type="text"
              className="w-full py-2 px-4 border border-gray-400 rounded-lg mb-4"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </>
        )}

        {step === 2 && (
          <>
            <label className="block mb-2 text-lg font-bold">Age:</label>
            <input
              type="text"
              className="w-full py-2 px-4 border border-gray-400 rounded-lg mb-4"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </>
        )}

        {step === 3 && (
          <>
            <label className="block mb-2 text-lg font-bold">Relationship Status:</label>
            <input
              type="text"
              className="w-full py-2 px-4 border border-gray-400 rounded-lg mb-4"
              value={relationshipStatus}
              onChange={(e) => setRelationshipStatus(e.target.value)}
            />
          </>
        )}

        {step === 4 && (
          <>
            <label className="block mb-2 text-lg font-bold">Email:</label>
            <input
              type="email"
              className="w-full py-2 px-4 border border-gray-400 rounded-lg mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="block mb-2 text-lg font-bold">Password:</label>
            <input
              type="password"
              className="w-full py-2 px-4 border border-gray-400 rounded-lg mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        )}

        {step < 5 && (
          <div className="flex justify-between">
            {step > 1 && (
              <button
                className="bg-primary hover:bg-primaryvariant text-white font-bold py-2 px-4 rounded"
                onClick={previousStep}
              >
                Previous
              </button>
            )}

            <button
              type="submit"
              className="bg-primary hover:bg-primaryvariant text-white font-bold py-2 px-4 rounded"
              onClick={step < 4 ? nextStep : null}
            >
              {step < 4 ? 'Next' : 'Submit'}
            </button>
          </div>
        )}
      </form>
    </div>
    </div>
  );
};

export default MultiStepForm;
