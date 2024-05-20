import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const[user, setUser]=useState(null);

  const login = async (username, password, userType) => {
    try {
      const res = await axios.post('/api/auth/login', { username, password });
      localStorage.setItem('token', res.data.token);
      setIsAuthenticated(true);
    } catch (err) {
      console.error(err);
    }
  };

  const register = async (username, password) => {
    try {
      const res = await axios.post('/api/auth/register', { username, password });
      localStorage.setItem('token', res.data.token);
      setIsAuthenticated(true);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    setUser(null);
   
    setIsAuthenticated(false);

  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;