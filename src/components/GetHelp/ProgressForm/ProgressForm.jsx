import React, { useState } from 'react';
import SelectionItemForm from '../SelectionItemForm/SelectionItemForm';
import { GenderType, RelashionshipSituation } from '../../Data/Data';
import InputForm from '../InputForm/InputForm';
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

          <div>
            <h1 className="text-3xl font-bold text-center">Find the right therapist</h1>
            <p className=' w-[50rem] text-center' >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis nisi vitae elit fermentum congue non mattis enim. Vestibulum interdum iaculis tellus
            </p>
          </div>
        
          <div className="mx-auto px-32 rounded-lg shadow-md ">
            
              <form onSubmit={handleSubmit} className='py-14'>
                {step === 1 && (
                  <SelectionItemForm title='What’s your gender?' radioItem={GenderType}/>
            )}

                {step === 2 && (      
                    <InputForm title="How old are you?"/>
                )}

                {step === 3 && (         
                    
                    <SelectionItemForm title='What is your relationship status?' radioItem={RelashionshipSituation}/>
                )}

                {step === 4 && (          
                  <InputForm title='Create an account to save your information'/>
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
