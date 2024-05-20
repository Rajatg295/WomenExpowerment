import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';

const AdminLogin = ({ handleLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin123') {
            console.log('Logged in with', username, password);
            navigate('/admin');

        } else {
            alert('Invalid username or password');
        }
        console.log('Login button clicked');
    };
    
    return (
       
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center">Admin Login</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            placeholder="Enter your username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Enter your password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                        />
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
