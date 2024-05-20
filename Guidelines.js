import React from 'react';

const Guidelines = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Guidelines</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Follow Safety Protocols</h2>
            <p className="text-gray-600">
              All participants must adhere to safety protocols such as wearing masks, maintaining social distancing, and using hand sanitizers.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Respect Others</h2>
            <p className="text-gray-600">
              Treat everyone with respect and kindness. Discrimination or harassment of any kind will not be tolerated.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Attend Workshops Regularly</h2>
            <p className="text-gray-600">
              Attend all workshops and training sessions regularly to get the maximum benefit from the program.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Ask Questions</h2>
            <p className="text-gray-600">
              Don't hesitate to ask questions if you don't understand something. Our instructors are here to help you succeed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
