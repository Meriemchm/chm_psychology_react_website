import React from 'react'

function PaymentMethodForm() {
  return (
    <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Your Cards</h2>
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
            First digits
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Carte CIB</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5321</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
            <a href="#" className="text-blue-600 hover:underline">Edit</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default PaymentMethodForm
