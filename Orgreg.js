import React, { useState } from 'react';

const Registration = () => {
    const [organizationDetails, setOrganizationDetails] = useState({
        organizationName: '',
        organizationType: '',
        organizationAddress: ''
    });

    const [projectInChargeDetails, setProjectInChargeDetails] = useState({
        fullName: '',
        email: '',
        phoneNumber: ''
    });

    const [documents, setDocuments] = useState({
        document1: null,
        document2: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 bg-gray-100">Registration</h1>

            <div className="bg-red-200 shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Organization Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="organizationName" className="block text-gray-700 font-bold mb-2">Organization Name</label>
                        <input 
                            type="text" 
                            id="organizationName" 
                            className="form-input border border-gray-500 focus:outline-none focus:bg-white focus:shadow-outline" 
                            value={organizationDetails.organizationName} 
                            onChange={(e) => setOrganizationDetails({ ...organizationDetails, organizationName: e.target.value })} 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="organizationType" className="block text-gray-700 font-bold mb-2">Organization Type</label>
                        <input type="text" id="organizationType" className="form-input border border-gray-500" value={organizationDetails.organizationType} onChange={(e) => setOrganizationDetails({ ...organizationDetails, organizationType: e.target.value })} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="organizationAddress" className="block text-gray-700 font-bold mb-2">Organization Address</label>
                        <input type="text" id="organizationAddress" className="form-input border border-gray-500" value={organizationDetails.organizationAddress} onChange={(e) => setOrganizationDetails({ ...organizationDetails, organizationAddress: e.target.value })} required />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </form>
            </div>

            <div className="bg-green-200 shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Project In-charge Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name</label>
                        <input type="text" id="fullName" className="form-input border border-gray-500" value={projectInChargeDetails.fullName} onChange={(e) => setProjectInChargeDetails({ ...projectInChargeDetails, fullName: e.target.value })} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">E-mail</label>
                        <input type="text" id="email" className="form-input border border-gray-500" value={projectInChargeDetails.email} onChange={(e) => setProjectInChargeDetails({ ...projectInChargeDetails, email: e.target.value })} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">phoneNumber</label>
                        <input type="text" id="phoneNumber" className="form-input border border-gray-500" value={projectInChargeDetails.phoneNumber} onChange={(e) => setProjectInChargeDetails({ ...projectInChargeDetails, phoneNumber: e.target.value })} required />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </form>
            </div>

            <div className="bg-blue-200 shadow-md rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Document Upload</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="document1" className="block text-gray-700 font-bold mb-2">Document 1</label>
                        <input type="file" id="document1" className="form-input" onChange={(e) => setDocuments({ ...documents, document1: e.target.files[0] })} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="document2" className="block text-gray-700 font-bold mb-2">Document 2</label>
                        <input type="file" id="document2" className="form-input" onChange={(e) => setDocuments({ ...documents, document2: e.target.files[0] })} required />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Registration;
