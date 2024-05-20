import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Registerngo = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            await register({ name, username, dob, password, contactNumber });
            navigate('/loginngo');
        } catch (error) {
            console.error('Registration failed:', error.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500">
            <div className="container mx-auto p-5 border rounded-lg shadow-lg bg-white" style={{ width: '400px' }}>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Register</h2>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="form-input w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="form-input w-full"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="date"
                            className="form-input w-full"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            placeholder="Date of Birth"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            className="form-input w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            className="form-input w-full"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="tel"
                            className="form-input w-full"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            placeholder="Contact Number"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full">Register</button>
                    <p className="text-center text-sm mt-4 text-gray-700">
                        Already have an account? <Link to="/loginngo" className="text-blue-500 hover:underline">Login here</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Registerngo;
