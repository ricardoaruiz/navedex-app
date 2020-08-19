import PropTypes from 'prop-types';
import React, { createContext, useCallback, useState } from 'react';

import * as localStorageUtils from '../commons/utils/localStorage.utils';
import * as authService from '../services/auth.service';

const authContextData = {
  id: '',
  email: '',
  token: '',
};

export const AuthContext = createContext(authContextData);
AuthContext.displayName = 'AuthContext';

export const AuthContextProvider = ({ children }) => {
  const [contextData, setContextData] = useState(() => {
    const localStorageAuth = localStorageUtils.getCredentials();
    const { id, email, token } = localStorageAuth;
    return {
      id,
      email,
      token,
    };
  });

  const login = useCallback(async ({ email, password }) => {
    try {
      const response = await authService.login({ email, password });
      const { data } = response;
      setContextData(data);
      localStorageUtils.setCredentials(data);
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }, []);

  const logout = useCallback(() => {
    setContextData(authContextData);
    localStorageUtils.removeCredentiasl();
  }, []);

  return (
    <AuthContext.Provider value={{ data: contextData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.elementType.isRequired,
};
