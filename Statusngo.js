import React from 'react';

const StatusSection = () => {
    const statusData = [
        { organization: 'Organization A', status: 'Approved' },
        { organization: 'Organization B', status: 'Pending' },
        { organization: 'Organization C', status: 'Rejected' },
    ];

    return (
        <div className="bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white mb-4">Status Section</h1>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Approval Status</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-left text-xs font-bold uppercase tracking-wider bg-pink-300 text-pink-800">Organization</th>
                                    <th className="px-4 py-2 text-left text-xs font-bold uppercase tracking-wider bg-purple-300 text-purple-800">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {statusData.map((item, index) => (
                                    <tr key={index} className={`${index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-50'}`}>
                                        <td className="px-4 py-2 text-blue-800">{item.organization}</td>
                                        <td className="px-4 py-2 text-blue-800">{item.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusSection;
