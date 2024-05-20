import React, { useState } from 'react';

const Registration=()=>{

    const [formData, setFormData] = useState({
        personalDetails: {
          name: '',
          dob: '',
          gender: '',
        },
        familyDetails: {
          fatherName: '',
          motherName: '',
        },
        contactDetails: {
          email: '',
          phone: '',
          address: '',
        },
        documentDetails: {
          idProof: '',
          addressProof: '',
        },
        trainingCourse: {
          courseName: '',
          startDate: '',
        },
        password: '',
        confirmPassword: '',
      });
    
      const [successMessage, setSuccessMessage] = useState('');
      const [errorMessage, setErrorMessage] = useState('');
      const [isPopupOpen, setIsPopupOpen] = useState(false);

      const handleChange = (e) => {
        const { name, value } = e.target;
        const [section, key] = name.split('.');
        if (section && key) {
            setFormData({
              ...formData,
              [section]: {
                ...formData[section],
                [key]: value,
              },
            });
          } else {
            setFormData({
              ...formData,
              [name]: value,
            });
          }
        };
          
      const handleSubmit = (e) => {
        e.preventDefault();
        const { password, confirmPassword } = formData;
    
        if (password !== confirmPassword) {
          setErrorMessage('Passwords do not match');
          return;
        }
    
       
        setTimeout(() => {
          setSuccessMessage('Registration successful! You can now attend STEP training courses.');
          setErrorMessage('');
          setIsPopupOpen(true);
        }, 1000);
      };
    
      return (
        <div className="registration-page p-8 bg-gray-50 min-h-screen flex items-center justify-center">
          <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Register for STEP Training Programmes</h2>
            {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">


              <div>
                <h3 className="text-xl font-semibold mb-2">Personal Details</h3>
                <div className="space-y-2">
                  <div>
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="personalDetails.name"
                      value={formData.personalDetails.name}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="dob" className="block text-gray-700">Date of Birth</label>
                    <input
                      type="date"
                      id="dob"
                      name="personalDetails.dob"
                      value={formData.personalDetails.dob}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="gender" className="block text-gray-700">Gender</label>
                    <select
                      id="gender"
                      name="personalDetails.gender"
                      value={formData.personalDetails.gender}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
    
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Family Details</h3>
                <div className="space-y-2">
                  <div>
                    <label htmlFor="fatherName" className="block text-gray-700">Father's Name</label>
                    <input
                      type="text"
                      id="fatherName"
                      name="familyDetails.fatherName"
                      value={formData.familyDetails.fatherName}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="motherName" className="block text-gray-700">Mother's Name</label>
                    <input
                      type="text"
                      id="motherName"
                      name="familyDetails.motherName"
                      value={formData.familyDetails.motherName}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>
                </div>
              </div>
    
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
                <div className="space-y-2">
                  <div>
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="contactDetails.email"
                      value={formData.contactDetails.email}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="contactDetails.phone"
                      value={formData.contactDetails.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-gray-700">Address</label>
                    <textarea
                      id="address"
                      name="contactDetails.address"
                      value={formData.contactDetails.address}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>
                </div>
              </div>
    
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Document Details</h3>
                <div className="space-y-2">
                  <div>
                    <label htmlFor="idProof" className="block text-gray-700">ID Proof</label>
                    <input
                      type="file"
                      id="idProof"
                      name="documentDetails.idProof"
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="addressProof" className="block text-gray-700">Address Proof</label>
                    <input
                      type="file"
                      id="addressProof"
                      name="documentDetails.addressProof"
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>
                </div>
              </div>
    
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Training Course Details</h3>
                <div className="space-y-2">
                  <div>
                    <label htmlFor="courseName" className="block text-gray-700">Course Name</label>
                    <input
                      type="text"
                      id="courseName"
                      name="trainingCourse.courseName"
                      value={formData.trainingCourse.courseName}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="startDate" className="block text-gray-700">Start Date</label>
                    <input
                      type="date"
                      id="startDate"
                      name="trainingCourse.startDate"
                      value={formData.trainingCourse.startDate}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>
                </div>
              </div>
    
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Set Your Password</h3>
                <div className="space-y-2">
                  <div>
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>
                </div>
              </div>
    
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Register
              </button>
            </form> 
            </div>
            {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Success!</h2>
            <p>{successMessage}</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4"
              onClick={() => setIsPopupOpen(false)} // Close the popup/modal on button click
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
       
        
    )
}
export default Registration;