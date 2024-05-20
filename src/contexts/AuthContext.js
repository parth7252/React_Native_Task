import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loadCredentials = async () => {
      const credentials = await AsyncStorage.getItem('credentials');
      if (credentials) {
        setIsAuthenticated(true);
      }
    };
    loadCredentials();
  }, []);

  const login = async (username, password) => {
    const storedCredentials = await AsyncStorage.getItem('dummyCredentials');
    if (storedCredentials) {
      const { storedUsername, storedPassword } = JSON.parse(storedCredentials);
      if (username === storedUsername && password === storedPassword) {
        await AsyncStorage.setItem('credentials', JSON.stringify({ username, password }));
        setIsAuthenticated(true);
        return true;
      }
    }
    return false;
  };

  const logout = async () => {
    await AsyncStorage.removeItem('credentials');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
