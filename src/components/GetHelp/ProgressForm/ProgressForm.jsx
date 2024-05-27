import React, { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [selectedGender, setSelectedGender] = useState('');
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

  
  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className='flex flex-col items-center justify-center'>
    <div className="w-1/2 h-2 bg-gray-300 rounded-full">
          <div
            className="h-full bg-primary rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        


      <form onSubmit={handleSubmit} className='py-14'>
        {step === 1 && (
          <>
          <div>
          <h1 className="text-3xl font-bold text-center">Find the right therapist</h1>
          <p className='py-5 w-[50rem] text-center' >
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis nisi vitae elit fermentum congue non mattis enim. Vestibulum interdum iaculis tellus
</p>
 </div>
      <div className="mx-auto my-8 py-8 px-32 rounded-lg shadow-md ">
        <label className="block mb-2 text-lg font-bold">What’s your gender?</label>
        <div className="custom-checkbox" onClick={() => handleGenderChange('male')}>
        <div className={`checkbox ${selectedGender === 'male' ? 'checked' : ''}`} />
        <label htmlFor="male">Male</label>
      </div>

      <div className="custom-checkbox" onClick={() => handleGenderChange('female')}>
        <div className={`checkbox ${selectedGender === 'female' ? 'checked' : ''}`} />
        <label htmlFor="female">Female</label>
      </div>

      <div className="custom-checkbox" onClick={() => handleGenderChange('other')}>
        <div className={`checkbox ${selectedGender === 'other' ? 'checked' : ''}`} />
        <label htmlFor="other">Other</label>
      </div>

      <input
        type="text"
        className="w-full py-2 px-4 border border-gray-400 rounded-lg mb-4"
        value={selectedGender}
        onChange={(e) => setSelectedGender(e.target.value)}
      />
      </div>
      </>
    )}

        {step === 2 && (          <>
          <div>
          <h1 className="text-3xl font-bold text-center">Find the right therapist</h1>
          <p className='py-5 w-[50rem] text-center' >
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis nisi vitae elit fermentum congue non mattis enim. Vestibulum interdum iaculis tellus
</p>
 </div>
          <div className="mx-auto my-8 py-8 px-32 rounded-lg shadow-md">
            <label className="block mb-2 text-lg font-bold">How old are you?</label>
            <input
              type="text"
              className="w-full py-2 px-4 border-2 border-six text-six rounded-lg mb-4"
              placeholder='Type your age in numbers...'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div> </>
        )}

        {step === 3 && (          <>
          <div>
          <h1 className="text-3xl font-bold text-center">Find the right therapist</h1>
          <p className='py-5 w-[50rem] text-center' >
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis nisi vitae elit fermentum congue non mattis enim. Vestibulum interdum iaculis tellus
</p>
 </div>
          <div className="mx-auto my-8 p-6 rounded-lg shadow-md">
            <label className="block mb-2 text-lg font-bold">What is your relationship status?</label>
            <input
              type="text"
              className="w-full py-2 px-4 border border-gray-400 rounded-lg mb-4"
              value={relationshipStatus}
              onChange={(e) => setRelationshipStatus(e.target.value)}
            />
          </div> </>
        )}

        {step === 4 && (          <>
          <div>
          <h1 className="text-3xl font-bold text-center">Find the right therapist</h1>
          <p className='py-5 w-[50rem] text-center' >
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis nisi vitae elit fermentum congue non mattis enim. Vestibulum interdum iaculis tellus
</p>
 </div>
          <div className="mx-auto my-8 p-6 rounded-lg shadow-md">
            <label className="block mb-2 text-lg font-bold">Create an account to save your information</label>
            <input
              type="email"
              className="w-full py-2 px-4 border-2 border-six rounded-lg mb-4"
              placeholder='Your full name or nickname...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="w-full py-2 px-4 border border-gray-400 rounded-lg mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div> </>
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

  );
};

export default MultiStepForm;
