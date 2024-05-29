import React from 'react'

const NotificationsForm = ()=> {
  return (
    <div className="p-4">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Type
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            E-Mail
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Prioritize
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Enable
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1h til next appointment</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" checked />
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Therapist available now</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" checked />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" checked />
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Discount available</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default NotificationsForm
