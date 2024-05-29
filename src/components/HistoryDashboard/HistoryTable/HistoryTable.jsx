import React from 'react'

function HistoryTable() {
    const appointments = [
        { doctor: 'Dr. Nabil', location: 'Online', date: 'August 15th, 2024', cost: '2200 DA', status: 'Missed' },
        { doctor: 'Dr. Nabil', location: 'Online', date: 'August 8th, 2024', cost: '2200 DA', status: 'Complete' },
        { doctor: 'Dr. Nabil', location: 'Online', date: 'August 1st, 2024', cost: '2200 DA', status: 'Complete' },
      ];
    
      const statusClasses = (status) => {
        switch (status) {
          case 'Missed':
            return 'bg-red-100 text-red-700';
          case 'Complete':
            return 'bg-green-100 text-green-700';
          default:
            return '';
        }
      };
    
      return (
        <div className="p-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Doctor
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Location
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date & Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Cost
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.map((appointment, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap flex items-center">
                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-pink-100 text-pink-600 mr-4">
                      Na
                    </span>
                    <div className="text-sm font-medium text-gray-900">{appointment.doctor}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.cost}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClasses(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  )
}

export default HistoryTable
