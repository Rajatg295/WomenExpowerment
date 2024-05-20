import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
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
    try{
    await register({ name, username, dob, password, contactNumber });
    navigate('/login');
    } catch(error){
      console.error('Registration failed:',error.message);
    }
  };

  return (
    <div className='register-form'>
    <div className="container mx-auto mt-5 p-5 border rounded shadow-lg bg-white" style={{ width: '300px' }}>
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <div className="mb-3">
      <input
        type="text"
        className="form-control w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      </div>
      <div className='mb-3'>
      <input
        type="text"
        className="form-control w-full"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      </div>
      <div className='mb-3'>
      <input
        type="date"
        className="form-control w-full"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        placeholder="Date of Birth"
        required
      />
      </div>
      <div className='mb-3'>
      <input
        type="password"
        className="form-control w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      </div>
      <div className='mb-3'>
      <input
        type="password"
        className="form-control w-full"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        required
      />
      </div>
      <div className='mb-3'>
      <input
        type="tel"
        className="form-control w-full"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
        placeholder="Contact Number"
        required
      />
      </div>
      <Link to='/Login'>
      <button type="submit" className="btn btn-primary w-half">Register</button>
      </Link>
    </form>
    </div>
    </div>
  );
};

export default Register;
