import React from "react";
import { NotificationsData, NotificationsTableData } from "../../../Data/Data";
import SwitchContainer from "../../../Utilities/SwitchContainer/SwitchContainer";

import CheckBoxCustom from "../../../Utilities/CheckBoxCustom/CheckBoxCustom";

const NotificationsForm = () => {
  return (
    <div className="">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            {NotificationsTableData.map(({ id, title }) => (
              <th
                key={id}
                scope="col"
                className={`py-3 text-left font-medium ${
                  id !== 1 ? "px-6" : ""
                }`}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {NotificationsData.map(({ id, title }) => (
            <tr key={id}>
              <td className="py-4 whitespace-nowrap ">{title}</td>
              <td className="px-10 py-4 whitespace-nowrap ">
                <CheckBoxCustom />
              </td>
              <td className="px-10 py-4 whitespace-nowrap  ">
                <CheckBoxCustom />
              </td>
              <div className="px-5 py-2">
                <SwitchContainer />
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotificationsForm;
