import React, { useState } from 'react';

const Status = () => {
  const [statusData] = useState([
    { id: 1, name: 'John Doe', status: 'Approved' },
    { id: 2, name: 'Jane Smith', status: 'Pending' },
    { id: 3, name: 'Alice Johnson', status: 'Rejected' },
  ]);

  return (
    <div className="bg-gradient-to-br from-purple-400 to-blue-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Application Status</h1>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {statusData.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={
                        item.status === 'Approved'
                          ? 'bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold'
                          : item.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold'
                          : 'bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold'
                      }
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Status;
