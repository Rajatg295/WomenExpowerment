import React from 'react';

const NGOs = () => {
  const ngosList = [
    {
      name: 'NGO A',
      location: 'Location A',
      trainingSectors: 'Agriculture, Tailoring',
      courseDetails: 'Details about courses offered by NGO A'
    },
    {
      name: 'NGO B',
      location: 'Location B',
      trainingSectors: 'Stitching, Tailoring',
      courseDetails: 'Details about courses offered by NGO B'
    },
    {
      name: 'NGO C',
      location: 'Location C',
      trainingSectors: 'Agriculture, Stitching',
      courseDetails: 'Details about courses offered by NGO C'
    }
  ];

  return (
    <div className="ngos-page p-8 bg-gradient-to-br from-yellow-400 to-blue-500 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">NGOs Page</h2>
      <ul className="ngos-list grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ngosList.map((ngo, index) => (
          <li key={index} className="ngo-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{ngo.name}</h3>
            <p className="text-gray-700 mb-1"><strong>Location:</strong> {ngo.location}</p>
            <p className="text-gray-700 mb-1"><strong>Training Sectors:</strong> {ngo.trainingSectors}</p>
            <p className="text-gray-700"><strong>Course Details:</strong> {ngo.courseDetails}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NGOs;
