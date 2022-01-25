import { FormikHelpers } from 'formik';
import { LoginInitValuesType } from 'Pages/Login/loginUtils';
import { RegisterInitValuesType } from 'Pages/Register/registerUtils';
import React, { createContext, useCallback, useMemo, useState } from 'react';
import { AuthType } from 'types/authTypes';
import { User } from 'types/UserType';
import axiosInstance from 'utils/axios';

export type AuthContextType = {
  user?: User;
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
  const [user, setUser] = useState<User | undefined>(undefined);

  const onLogin = useCallback(
    async (
      values: LoginInitValuesType,
      actions: FormikHelpers<LoginInitValuesType>,
    ) => {
      try {
        const { remember_me, serverError, ...rest } = values;
        const res = await axiosInstance.post<AuthType>('login', rest);
        actions.resetForm();
        sessionStorage.setItem('@app/token', res.data.accessToken);
        setUser(res.data.user);
      } catch (error) {
        console.log('error', error);
        let message = 'Something went wrong. Please try after sometime.';
        if (error instanceof Error) {
          message = error.message;
        }
        actions.setErrors({ serverError: message });
      }
    },
    [],
  );

  const onRegister = useCallback(
    async (
      values: RegisterInitValuesType,
      actions: FormikHelpers<RegisterInitValuesType>,
    ) => {
      try {
        const res = await axiosInstance.post<AuthType>('register', values);
        actions.resetForm();
        sessionStorage.setItem('@app/token', res.data.accessToken);
        setUser(res.data.user);
      } catch (error) {
        console.log('error', error);
        let message = 'Something went wrong. Please try after sometime.';
        if (error instanceof Error) {
          message = error.message;
        }
        actions.setErrors({ serverError: message });
      }
    },
    [],
  );

  const onLogout = useCallback(() => {
    sessionStorage.removeItem('@app/token');
    setUser(undefined);
  }, []);

  const value = useMemo(
    () => ({
      user,
      onLogin,
      onRegister,
      onLogout,
    }),
    [user, onLogin, onRegister, onLogout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
