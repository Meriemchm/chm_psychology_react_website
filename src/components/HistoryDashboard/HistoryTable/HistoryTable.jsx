import React from "react";
import { HistoryTableData } from "../../Data/Data";

function HistoryTable({data}) {


  const statusClasses = (status) => {
    switch (status) {
      case "Missed":
        return "bg-red-100 text-red-700";
      case "Complete":
        return "bg-green-100 text-green-700";
      default:
        return "";
    }
  };

  return (
    <div className="md:p-4 rounded-lg shadow-md h-full ">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr >
          {HistoryTableData.map(({ id, title }) => (
              <th key={id} scope="col" className="md:px-6 py-3 md:text-base text-sm text-left text-graytabledash font-medium">
                {title}
              </th>
          ))}
            </tr>
        </thead>
        <tbody>
          {data.map((appointment, id) => (
            <tr key={id} className="text-sm md:text-base">
              <td className="md:px-6 py-4 whitespace-nowrap flex items-center">
                <span className="md:inline-flex hidden items-center justify-center h-10 w-10 rounded-full bg-pink-100 text-pink-600 mr-4">
                  Na
                </span>
                <div className="text-sm font-medium text-gray-900">
                  {appointment.doctor}
                </div>
              </td>
              <td className="md:px-6 py-4 whitespace-nowrap  ">
                {appointment.location}
              </td>
              <td className="md:px-6 py-4 whitespace-nowrap  text-gray-500">
                {appointment.date}
              </td>
              <td className="md:px-6 py-4 whitespace-nowrap  ">
                {appointment.cost}
              </td>
              <td className="md:px-6 py-4 whitespace-nowrap">
                <span
                  className={`md:px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClasses(
                    appointment.status
                  )}`}
                >
                  {appointment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryTable;
