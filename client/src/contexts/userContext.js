import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem('token'));

  const updateToken = (newToken) => {
    sessionStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const removeToken = () => {
    sessionStorage.removeItem('token');
    setToken(null);
  };

  return (
    <UserContext.Provider value={{ token, updateToken, removeToken }}>
      {children}
    </UserContext.Provider>
  );
};
