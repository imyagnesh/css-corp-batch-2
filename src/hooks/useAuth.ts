import { FormikHelpers } from 'formik';
import { LoginInitValuesType } from 'Pages/Login/loginUtils';
import { RegisterInitValuesType } from 'Pages/Register/registerUtils';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthType } from 'types/authTypes';
import axiosInstance from 'utils/axios';
import useError from './useError';

const useAuth = () => {
  const [token, setToken] = useState('');
  const handleError = useError();
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('@app/token');
    const user = sessionStorage.getItem('@app/user');
    if (user) {
      const objUser = JSON.parse(user);
      console.log(objUser);
    }
    // write validate token mechanism here
    if (token) setToken(token);
  }, []);

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
        sessionStorage.setItem('@app/user', JSON.stringify(res.data.user));
        setToken(res.data.accessToken);
        navigate('/home', { replace: true });
      } catch (error) {
        const message = handleError(error);
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
        sessionStorage.setItem('@app/user', JSON.stringify(res.data.user));
        setToken(res.data.accessToken);
        navigate('/home', { replace: true });
      } catch (error) {
        const message = handleError(error);
        actions.setErrors({ serverError: message });
      }
    },
    [],
  );

  const onLogout = useCallback(() => {
    sessionStorage.removeItem('@app/token');
    sessionStorage.removeItem('@app/user');
    setToken('');
    navigate('/', { replace: true });
  }, []);

  return {
    token,
    onLogin,
    onRegister,
    onLogout,
  };
};

export default useAuth;
