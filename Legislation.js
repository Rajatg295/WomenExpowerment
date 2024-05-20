import React from 'react';
import { Link } from 'react-router-dom';

const Legislation = () => {
  return (
    <div className="legislation-page bg-blue-50 min-h-screen py-12">
      <div>
          <Link to={'/'}>
    <button className="px-6 py-2 bg-blue-500 text-white mx-5 font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
        Home
    </button>
</Link>
</div>
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">Legislation and Policy</h1>
        <div className="space-y-10">
          <div className="legislation-item bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Legislation Title 1</h2>
            <p className="text-gray-700">
              Details about legislation and policy 1. This section provides information on various acts and policies aimed at women and child development.
            </p>
          </div>
          <div className="legislation-item bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Legislation Title 2</h2>
            <p className="text-gray-700">
              Details about legislation and policy 2. This includes information on government initiatives and programs.
            </p>
          </div>
          <div className="legislation-item bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Legislation Title 3</h2>
            <p className="text-gray-700">
              Details about legislation and policy 3. This section outlines the legal framework and support systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legislation;
