import React from "react";
import { PaymentTableData } from "../../../Data/Data";

function PaymentMethodForm() {
  return (
    <div className="pt-20">
      <h2 className="text-xl font-bold mb-4">Your Cards</h2>
      <table className="min-w-full ">
        <thead>
          <tr>
            {PaymentTableData.map(({ id, title }) => (
              <th
                key={id}
                scope="col"
                className={`py-3 text-left font-medium ${
                  id !== 1 ? "md:px-20 px-10" : ""
                }`}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="">
          <tr>
            <td className=" py-4 whitespace-nowrap">Carte CIB</td>
            <td className="md:px-20  px-10 py-4 whitespace-nowrap text-graytabledash ">
              5321
            </td>
            <td className="md:px-20 px-10 py-4 whitespace-nowrap text-sm ">
              <a href="#" className="text-second underline hover:no-underline">
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PaymentMethodForm;
