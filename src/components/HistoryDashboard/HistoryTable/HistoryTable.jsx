import React from "react";
import { HistoryTableData } from "../../Data/Data";

function HistoryTable() {
  const appointments = [
    {
      doctor: "Dr. Nabil",
      location: "Online",
      date: "August 15th, 2024",
      cost: "2200 DA",
      status: "Missed",
    },
    {
      doctor: "Dr. Nabil",
      location: "Online",
      date: "August 8th, 2024",
      cost: "2200 DA",
      status: "Complete",
    },
    {
      doctor: "Dr. Nabil",
      location: "Online",
      date: "August 1st, 2024",
      cost: "2200 DA",
      status: "Complete",
    },
  ];

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
    <div className="p-4 rounded-lg shadow-md h-full ">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr >
          {HistoryTableData.map(({ id, title }) => (
              <th key={id} scope="col" className="px-6 py-3 text-left text-graytabledash font-medium">
                {title}
              </th>
          ))}
            </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, id) => (
            <tr key={id}>
              <td className="px-6 py-4 whitespace-nowrap flex items-center">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-pink-100 text-pink-600 mr-4">
                  Na
                </span>
                <div className="text-sm font-medium text-gray-900">
                  {appointment.doctor}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap  ">
                {appointment.location}
              </td>
              <td className="px-6 py-4 whitespace-nowrap  text-gray-500">
                {appointment.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap  ">
                {appointment.cost}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClasses(
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
