import { AuthType } from "@types/auth";
import { User } from "@types/user";
import { LoginInitValueType } from "pages/login/loginFields";
import { RegisterInitValueType } from "pages/register/registerFields";
import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import axiosInstance from "utils/axiosInstance";
import { useRouter } from "next/router";

export type AuthInitStateType = {
  isLoggedIn: boolean;
  user?: User;
  accessToken?: string;
};

const AuthInitState = {
  isLoggedIn: false,
};

export type AuthReducerActions =
  | { type: "AUTH_REQUEST"; payload?: never }
  | { type: "AUTH_FAIL"; payload?: never }
  | { type: "AUTH_SUCCESS"; payload: AuthType }
  | { type: "RESET"; payload?: never };

export const AuthReducer = (
  state: AuthInitStateType,
  action: AuthReducerActions
) => {
  switch (action.type) {
    case "AUTH_REQUEST":
      return state;

    case "AUTH_FAIL":
      return state;

    case "AUTH_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        accessToken: action.payload.accessToken,
        user: action.payload.user,
      };

    case "RESET":
      return AuthInitState;

    default:
      return state;
  }
};

type DispatchActions = {
  login: (data: LoginInitValueType) => Promise<void>;
  register: (data: RegisterInitValueType) => Promise<void>;
};

type AuthContextType = AuthInitStateType & DispatchActions;

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, AuthInitState);
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem("@token");
    if (token) {
      dispatch({ type: "AUTH_SUCCESS", payload: JSON.parse(token) });
    } else {
      dispatch({ type: "RESET" });
    }
  }, []);

  const login = useCallback(
    async (data: LoginInitValueType) => {
      try {
        const { remember_me, serverError, ...rest } = data;
        dispatch({ type: "AUTH_REQUEST" });
        const res = await axiosInstance.post<AuthType>("login", rest);
        sessionStorage.setItem("@token", JSON.stringify(res.data));
        dispatch({ type: "AUTH_SUCCESS", payload: res.data });
        router.push("/");
      } catch (error) {
        dispatch({ type: "AUTH_FAIL" });
      }
    },
    [router]
  );

  const register = useCallback(
    async (data: RegisterInitValueType) => {
      try {
        dispatch({ type: "AUTH_REQUEST" });
        const { serverError, confirmPassword, ...rest } = data;
        const res = await axiosInstance.post<AuthType>("register", rest);
        sessionStorage.setItem("@token", JSON.stringify(res.data));
        dispatch({ type: "AUTH_SUCCESS", payload: res.data });
        router.push("/");
      } catch (error) {
        dispatch({ type: "AUTH_FAIL" });
      }
    },
    [router]
  );

  return (
    <AuthContext.Provider value={{ login, register, ...state }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
