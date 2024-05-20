import React from 'react';

const OrganizationsSection = () => {
    return (
        <div className="bg-gradient-to-br from-yellow-300 via-green-400 to-blue-500 min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white mb-4">Organizations Section</h1>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Registered Organizations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-yellow-100 rounded-lg p-4">
                            <h3 className="text-lg font-semibold mb-2 text-yellow-800">Organization Name 1</h3>
                            <p className="text-yellow-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod justo a velit auctor, ac posuere est sagittis.</p>
                        </div>
                        <div className="bg-green-100 rounded-lg p-4">
                            <h3 className="text-lg font-semibold mb-2 text-green-800">Organization Name 2</h3>
                            <p className="text-green-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod justo a velit auctor, ac posuere est sagittis.</p>
                        </div>
                        <div className="bg-blue-100 rounded-lg p-4">
                            <h3 className="text-lg font-semibold mb-2 text-blue-800">Organization Name 3</h3>
                            <p className="text-blue-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod justo a velit auctor, ac posuere est sagittis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganizationsSection;
