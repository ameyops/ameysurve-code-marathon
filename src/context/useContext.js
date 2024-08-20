import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    setUsername('');
  };
  
  const setUsernameglobal = (newUsername) => setUsername(newUsername);

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout, setUsernameglobal }}>
      {children}
    </AuthContext.Provider>
  );
};
