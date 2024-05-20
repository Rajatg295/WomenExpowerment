import React from 'react';

const FAQ = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="faq-item mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">What is this platform about?</h2>
            <p className="text-gray-600">This platform is designed to provide resources and information related to women and child development initiatives.</p>
          </div>
          <div className="faq-item mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">How can I register?</h2>
            <p className="text-gray-600">You can register by clicking on the Register link in the navigation bar and filling out the required details.</p>
          </div>
          <div className="faq-item mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Who can access the STEP program?</h2>
            <p className="text-gray-600">The STEP program is accessible to authenticated users who have registered and logged in to the platform.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
