import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

export default () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('You cannot use useAuth without using AuthProvider');
  }

  return context;
};
