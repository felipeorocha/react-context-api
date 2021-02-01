import React from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const user = {
    name: 'Felipe',
    age: 25
  };

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}
