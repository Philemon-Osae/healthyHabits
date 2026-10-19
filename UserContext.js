import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    loadName();
  }, []);

  const loadName = async () => {
    const saved = await AsyncStorage.getItem('userName');
    if (saved) setUserName(saved);
  };

  const saveName = async (name) => {
    setUserName(name);
    await AsyncStorage.setItem('userName', name);
  };

  return (
    <UserContext.Provider value={{ userName, saveName, loadName }}>
      {children}
    </UserContext.Provider>
  );
};