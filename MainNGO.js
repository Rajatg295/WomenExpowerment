import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext';


const MainNGOPage = () => {
    const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
      logout(); 
    navigate('/loginngo');
  };

  return (
    
    <div className="min-h-screen bg-gray-100">
    <header className="flex items-center justify-between h-16 px-6 bg-white shadow-md">
      <ul className="flex items-center space-x-6">
        <li className="text-xl font-semibold"><Link to="/">Home</Link></li>
      </ul>
      <div className="space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300">Contact Us</button>
        <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300">Logout</button>
      </div>
    </header>

    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">NGO Dashboard</h1>
      <nav className="bg-white shadow-md rounded-lg p-6 mb-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <li>
            <Link to="/ngo/criteria" className="block p-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300 text-center">Criteria</Link>
          </li>
          <li>
            <Link to="/ngo/organizations" className="block p-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300 text-center">Organizations</Link>
          </li>
          <li>
            <Link to="/ngo/funding-norms" className="block p-4 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition duration-300 text-center">Funding Norms</Link>
          </li>
          <li>
            <Link to="/ngo/orgreg" className="block p-4 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition duration-300 text-center">Register</Link>
          </li>
          <li>
            <Link to="/ngo/status" className="block p-4 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition duration-300 text-center">Status</Link>
          </li>
          <li>
            <Link to="/ngo/faqngo" className="block p-4 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition duration-300 text-center">FAQ</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  );
};

export default MainNGOPage;