import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login,logout } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    await login(username, password);
    navigate('/step');
    }catch(error){
      console.error('login failed:',error.message);
    }
  };
  const handleLogout = () => {
    logout(); 
  };
  return (
    <div className='login-form'>
    <div className="container mx-auto mt-5 p-5 border rounded shadow-lg bg-white" style={{ width: '300px' }}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <Link to='/step'>
        <button type="submit" className="btn btn-primary w-half">Login</button>
</Link>
      </form>
      <div className="flex justify-between mt-4">
        
        <Link to="/register" className="text-blue-500 hover:underline">Create Account?</Link>
        <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</Link>
      </div>
    </div>
    </div>
  );
};

export default Login;
