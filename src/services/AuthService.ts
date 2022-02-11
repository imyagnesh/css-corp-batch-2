import { LoginInitValuesType } from 'Pages/Login/loginUtils';
import { RegisterInitValuesType } from 'Pages/Register/registerUtils';
import { AuthType } from 'types/authTypes';
import axiosInstance from 'utils/axios';

export default class AuthService {
  async login(loginRequest: LoginInitValuesType) {
    const { serverError, remember_me, ...rest } = loginRequest;
    const res = await axiosInstance.post<AuthType>('login', rest);
    return res.data;
  }

  async register(registerRequest: RegisterInitValuesType) {
    const { serverError, confirmPassword, ...rest } = registerRequest;
    const res = await axiosInstance.post<AuthType>('register', rest);
    return res.data;
  }
}
