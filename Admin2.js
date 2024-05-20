import React, { useState } from 'react';

const AdminDashboard = () => {
    const [ngos, setNgos] = useState([]);
    const [newNgoName, setNewNgoName] = useState('');
    const [updatedNgoName, setUpdatedNgoName] = useState('');
    const [newNgoData, setnewNgoData] = useState('');

    const handleAddNGO = () => {
        if (newNgoName.trim() !== '') {
            const newNgo = {
                id: ngos.length + 1,
                name: newNgoName.trim()
            };
            setNgos([...ngos, newNgo]);
            setNewNgoName('');
            const handleAddNGO = async () => {
                try {
                    const response = await fetch('/api/ngos', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newNgoData)
                    });
            
                    if (response.ok) {
                        console.log('New NGO added successfully');
                    } else {
                        console.error('Failed to add new NGO');
                    }
                } catch (error) {
                    console.error('Error adding new NGO:', error);
                }
            };
            
        }
    };

    const handleRemoveNGO = (id) => {
        setNgos(ngos.filter(ngo => ngo.id !== id));
        const handleRemoveNGO = async (id) => {
            try {
                const response = await fetch(`/api/ngos/${id}`, {
                    method: 'DELETE'
                });
        
                if (response.ok) {
                    console.log('NGO removed successfully');
                } else {
                    console.error('Failed to remove NGO');
                }
            } catch (error) {
                console.error('Error removing NGO:', error);
            }
        };
        
    };

    const handleUpdateNGO = (id) => {
        const updatedNgos = ngos.map(ngo => {
            if (ngo.id === id) {
                return { ...ngo, name: updatedNgoName.trim() };
            }
            return ngo;
        });
        setNgos(updatedNgos);
        
        const handleUpdateNGO = async (id) => {
            try {
                const response = await fetch(`/api/ngos/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name: updatedNgoName })
                });
        
                if (response.ok) {
                    console.log('NGO updated successfully');
                } else {
                    console.error('Failed to update NGO');
                }
            } catch (error) {
                console.error('Error updating NGO:', error);
            }
        };
        
        setUpdatedNgoName('');
    };

    return (
        <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Admin Dashboard</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">Add NGO</h2>
        <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-lg">
          <input 
            type="text" 
            value={newNgoName} 
            onChange={(e) => setNewNgoName(e.target.value)} 
            className="form-input mr-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex-grow" 
            placeholder="Enter NGO name" 
          />
          <button 
            onClick={handleAddNGO} 
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
          >
            Add
          </button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">Existing NGOs</h2>
        {ngos.map(ngo => (
          <div key={ngo.id} className="bg-white shadow-lg rounded-lg p-6 mb-6 border-l-4 border-blue-500">
            <div className="flex justify-between items-center mb-4">
              <input 
                type="text" 
                value={updatedNgoName} 
                onChange={(e) => setUpdatedNgoName(e.target.value)} 
                className="form-input mr-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 flex-grow" 
                placeholder="Update NGO name" 
              />
              <div>
                <button 
                  onClick={() => handleRemoveNGO(ngo.id)} 
                  className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg mr-2 hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
                <button 
                  onClick={() => handleUpdateNGO(ngo.id)} 
                  className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600 transition duration-300"
                >
                  Update
                </button>
              </div>
            </div>
            <p className="text-lg font-semibold">NGO Name: {ngo.name}</p>
            <p className="text-gray-700">NGO ID: {ngo.id}</p>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600">Total NGOs</h3>
            <p className="text-3xl font-bold text-gray-800">50</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600">Active NGOs</h3>
            <p className="text-3xl font-bold text-gray-800">35</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600">Pending Applications</h3>
            <p className="text-3xl font-bold text-gray-800">5</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-blue-600">Completed Projects</h3>
            <p className="text-3xl font-bold text-gray-800">20</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-blue-500">Recent Activities</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="bg-green-500 h-3 w-3 rounded-full mr-2"></span>
              <p>NGO One added a new project.</p>
            </li>
            <li className="flex items-center">
              <span className="bg-yellow-500 h-3 w-3 rounded-full mr-2"></span>
              <p>NGO Two updated their status.</p>
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 h-3 w-3 rounded-full mr-2"></span>
              <p>New NGO registered: NGO Three.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
    );
};

export default AdminDashboard;
