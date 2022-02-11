import React, { useContext } from 'react';
import AuthService from 'services/AuthService';
import AuthStore from 'store/AuthStore';

const authService = new AuthService();
const authStore = new AuthStore(authService);

export const AuthStoreContext = React.createContext<AuthStore>({} as AuthStore);

export const AuthStoreProvider: React.FC = ({ children }) => {
  return (
    <AuthStoreContext.Provider value={authStore}>
      {children}
    </AuthStoreContext.Provider>
  );
};

export const useAuthStore = () => {
  return useContext(AuthStoreContext);
};
