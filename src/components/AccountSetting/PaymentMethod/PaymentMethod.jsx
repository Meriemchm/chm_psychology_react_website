import React from "react";
import PaymentMethodForm from "./PaymentMethodForm/PaymentMethodForm";
import Selector from "../../Utilities/Selector/Selector";
import { stateData } from "../../Data/Data";

function PaymentMethod() {
  return (
    <div className="relative ">
      <h1 className="font-bold text-2xl pb-10">Payment Information</h1>
      
      <p className="text-lg absolute left-0 text-center">Preferred method</p>
      <div className="absolute right-0 ">
        <Selector data={stateData} title="Edahabia (CCP)" />
      </div>
      <PaymentMethodForm />
    </div>
  );
}

export default PaymentMethod;
