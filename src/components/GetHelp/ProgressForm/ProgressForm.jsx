import React, { useState } from 'react';
import SelectionItemForm from '../SelectionItemForm/SelectionItemForm';
import { GenderType, RelashionshipSituation } from '../../Data/Data';
import { AgeForm } from '../../Data/Data';
import { AccountForm ,AccountValidation} from '../../Data/Data';
import CompleteForm from '../CompleteForm/CompleteForm';

import InputForm from '../InputForm/InputForm';
const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(25);


  const nextStep = () => {
    setStep((prevStep) => {
      const newStep = prevStep + 1;
      if (newStep === 4 || newStep === 5) {
        setProgress(99);
      } else if (newStep === 6) {
        setProgress(100);
      } else {
        setProgress(newStep * 25);
      }
      return newStep;
    });
  };

  const previousStep = () => {
    setStep((prevStep) => {
      const newStep = prevStep - 1;
      if (newStep === 4 || newStep === 5) {
        setProgress(99);
      } else if (newStep === 3) {
        setProgress(75);
      } else {
        setProgress(newStep * 25);
      }
      return newStep;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <div className='flex flex-col items-center justify-center'>

    <div className="relative w-1/2 h-2 bg-gray-300 rounded-full">
        <div
            className="h-full bg-primary rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
      <p style={{ marginLeft: `${progress}%` }} className='-top-6 text-primary font-semibold absolute'>{progress === 100 ? 'Complete!' : `${progress}%`}</p>
        </div>

          
          {(step === 1 || step === 2 || step === 3)  && (
            <div>
            <h1 className="text-3xl font-bold text-center pt-10">Find the right therapist</h1>
            <p className=' w-[50rem] text-center pt-5' >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis nisi vitae elit fermentum congue non mattis enim. Vestibulum interdum iaculis tellus
            </p>
          </div>

        )}
          {(step === 4 || step === 5)  && (
            
          <h1 className="text-3xl font-bold text-center pt-10">Almost there!</h1>
          )}
          {(step === 6 )  && (
            
            <h1 className="text-3xl font-bold text-center pt-10">Welcome to Rameem!</h1>
            )}

{step === 6 && (          
                  <CompleteForm />
                )}


              <form onSubmit={handleSubmit} className='w-1/2 px-36 '>
                <div className="py-10 rounded-lg shadow-md">

                {step === 1 && (
                  <SelectionItemForm  title='What’s your gender?' radioItem={GenderType}/>
            )}

                {step === 2 && (      
                    <InputForm Data={AgeForm} title="How old are you?"/>
                )}

                {step === 3 && (         
                    
                    <SelectionItemForm title='What is your relationship status?' radioItem={RelashionshipSituation}/>
                )}

                {step === 4 && (          
                  <InputForm Data={AccountForm} title='Create an account to save your information'/>
                )}
                 {step === 5 && (          
                  <InputForm Data={AccountValidation} title='We sent a code to your email, type it here:'/>
                )}
                </div>
           

                {step < 7 && (
                  <div className="flex justify-between py-10">
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
                      onClick={step < 6 ? nextStep : null}
                    >
                      {step < 6 ? 'Next' : 'Submit'}
                    </button>
                  </div>
                )}
              </form>
        
    </div>

  );
};

export default MultiStepForm;
