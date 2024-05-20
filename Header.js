import React from 'react';
import logo from '../logo2.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-blue-500 shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div className="rounded-full bg-yellow-500 w-16 h-16 flex items-center justify-center mr-4 shadow-lg">
                        <img src={logo} alt="Logo" className="h-10 w-10" />
                    </div>
                    <h1 className="text-white text-lg font-bold">MINISTRY OF WOMEN & CHILD DEVELOPMENT</h1>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/about" className="block p-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300 text-center">About Us</Link>
                        </li>
                        <li>
                            <Link to="/legislation" className="block p-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300 text-center">Legislation & Policy</Link>
                        </li>
                        <li>
                            <Link to="/login" className="block p-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition duration-300 text-center">STEP</Link>
                        </li>
                        <li>
                            <Link to="/loginngo" className="block p-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition duration-300 text-center">NGOs</Link>
                        </li>
                        <li>
                            <Link to="/adminlogin" className="block p-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition duration-300 text-center">Admin</Link>
                        </li>
                        <li>
                            <Link to="/faq" className="block p-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition duration-300 text-center">FAQ</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
