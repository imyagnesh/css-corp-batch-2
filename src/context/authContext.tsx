import { FormikHelpers } from 'formik';
import useAuth from 'hooks/useAuth';
import { LoginInitValuesType } from 'Pages/Login/loginUtils';
import { RegisterInitValuesType } from 'Pages/Register/registerUtils';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthType } from 'types/authTypes';
import { User } from 'types/UserType';
import axiosInstance from 'utils/axios';

export type AuthContextType = {
  token?: string;
  onLogin: (
    values: LoginInitValuesType,
    actions: FormikHelpers<LoginInitValuesType>,
  ) => void;
  onRegister: (
    values: RegisterInitValuesType,
    actions: FormikHelpers<RegisterInitValuesType>,
  ) => void;
  onLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  onLogin: () => {},
  onRegister: () => {},
  onLogout: () => {},
});

type Props = {
  children: React.ReactElement;
};

export const AuthProvider = ({ children }: Props) => {
  const { onLogin, onRegister, onLogout, token } = useAuth();

  const value = useMemo(
    () => ({
      token,
      onLogin,
      onRegister,
      onLogout,
    }),
    [token, onLogin, onRegister, onLogout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
