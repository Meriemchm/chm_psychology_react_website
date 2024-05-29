import React from "react";
import { NotificationsData, NotificationsTableData } from "../../../Data/Data";

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
              <td className="py-4 whitespace-nowrap ">
                {title}
              </td>
              <td className="px-10 py-4 whitespace-nowrap text-gray-500">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
              </td>
              <td className="px-10 py-4 whitespace-nowrap text-sm text-gray-500">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
              </td>
              <td className="px-10 py-4 whitespace-nowrap text-sm text-gray-500">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  checked
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotificationsForm;
