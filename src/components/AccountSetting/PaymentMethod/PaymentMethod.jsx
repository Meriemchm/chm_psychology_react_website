import React from "react";
import PaymentMethodForm from "./PaymentMethodForm/PaymentMethodForm";

function PaymentMethod() {
  return (
    <div>
      <h1 className="font-bold text-2xl pb-2">Payment Information</h1>
      <div className="flex justify-between items-center gap-2 py-5">
        <p className="text-lg">Prefered method</p>
        <p>Edahabia (CCP)</p>
      </div>
      <PaymentMethodForm />
    </div>
  );
}

export default PaymentMethod;
