import React, { useState, useCallback } from 'react';

const AuthContext = React.createContext({
  token: '',
  name: '',
  role: '',
  isLoggedIn: false,
  login: (token, name, role) => {},
  logout: () => {},
});

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedName = localStorage.getItem('name');
  const storedRole = localStorage.getItem('role');

  return {
    token: storedToken,
    name: storedName,
    role: storedRole
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  
  let initialToken;
  let initialName;
  let initialRole;
  if (tokenData) {
    initialToken = tokenData.token;
    initialName = tokenData.name;
    initialRole = tokenData.role;
  }

  const [token, setToken] = useState(initialToken);
  const [name, setName] = useState(initialName);
  const [role, setRole] = useState(initialRole);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    setName(null);
    setRole(null);
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
  }, []);

  const loginHandler = (token, name, role) => {
    setToken(token);
    setName(name);
    setRole(role);
    localStorage.setItem('token', token);
    localStorage.setItem('name', name);
    localStorage.setItem('role', role);
  };

  const contextValue = {
    token: token,
    name: name,
    role: role,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;