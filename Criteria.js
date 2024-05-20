import React from 'react';

const CriteriaSection = () => {
    return (
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white mb-8 text-center">Criteria Section</h1>
                <div className="bg-white shadow-md rounded-lg p-8">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Criteria for NGO Registration</h2>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li className="mb-4">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li className="mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li className="mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                        <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CriteriaSection;
