import React, { useContext } from "react";
import { createContext, useState } from "react";
import api from "../../service/api";
import { iDefaultPropsProvider } from "../types";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../ProfileContext/ProfileContext";

export interface iUserClientRegister {
  email: string;
  password: string;
  confirmPassword?: string;
  name: string;
  state: string;
  city: string;
  age: number;
  phone: string;
  type: string;
  avatar_URL: string;
}

export interface iUserServiceRegister extends iUserClientRegister {
  workOnCities: string[];
  workOnCategories: string[];
  ratings: number[];
  available: boolean;
}

export interface iUserLogin {
  email: string;
  password: string;
}

export interface iUserClient {
  email: string;
  name: string;
  age: number;
  state: string;
  city: string;
  phone: string;
  type?: string;
  id?: number;
  avatar_URL: string;
}

export interface iUserService extends iUserClient {
  workOnCities: string[];
  workOnCategories: string[];
  ratings: number[];
  available: boolean;
}

interface iUserContext {
  userClient: iUserClient | null;
  userService: iUserService | null;
  userClientRegister: (data: iUserClientRegister) => void;
  userServiceRegister: (data: iUserServiceRegister) => void;
  userLogin: (data: iUserLogin) => void;
  userLogout: () => void;
  spinner: boolean;
  errorApi: boolean;
  setErrorApi: (data: boolean) => void;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iDefaultPropsProvider) => {
  const [userClient, setUserClient] = useState<iUserClient | null>(null);
  const [userService, setUserService] = useState<iUserService | null>(null);
  const [spinner, setSpinner] = useState(false);
  const [errorApi, setErrorApi] = useState(false);
  const navigate = useNavigate();
  const { setCategory } = useContext(ProfileContext);

  const userClientRegister = async (data: iUserClientRegister) => {
    setSpinner(true);
    try {
      const response = await api.post("/register", data);
      setUserClient(response.data.user);
      localStorage.setItem("@Id:EazyHome", response.data.user.id);
      localStorage.setItem("@Token:EazyHome", response.data.accessToken);
      localStorage.setItem("@UserType:EazyHome", response.data.user.type);
      localStorage.setItem("@UserCity:EazyHome", response.data.user.city);
      setSpinner(false);
      navigate("/dashboardclient");
    } catch (error) {
      setSpinner(false);
      setErrorApi(true);
    }
  };

  const userServiceRegister = async (data: iUserServiceRegister) => {
    setSpinner(true);
    try {
      const response = await api.post("/register", data);
      setUserService(response.data.user);
      localStorage.setItem("@Id:EazyHome", response.data.user.id);
      localStorage.setItem("@Token:EazyHome", response.data.accessToken);
      localStorage.setItem("@UserType:EazyHome", response.data.user.type);
      localStorage.setItem("@UserCity:EazyHome", response.data.user.city);
      navigate("/dashboardservice");
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
      setErrorApi(true);
    }
  };

  const userLogin = async (data: iUserLogin) => {
    setSpinner(true);
    try {
      const response = await api.post("/login", data);
      const userService = response.data.user.type;
      localStorage.setItem("@Id:EazyHome", response.data.user.id);
      localStorage.setItem("@Token:EazyHome", response.data.accessToken);
      localStorage.setItem("@UserType:EazyHome", response.data.user.type);
      localStorage.setItem("@UserCity:EazyHome", response.data.user.city);
      setSpinner(false);
      if (userService === "prestador") {
        setUserService(response.data.user);
        navigate("/dashboardservice");
      } else {
        setUserClient(response.data.user);
        navigate("/dashboardclient");
      }
    } catch (error) {
      setSpinner(false);
      setErrorApi(true);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@Token:EazyHome");
    localStorage.removeItem("@Id:EazyHome");
    localStorage.removeItem("@UserType:EazyHome");
    localStorage.removeItem("@UserCity:EazyHome");
    setUserClient(null);
    setUserService(null);
    setCategory("");
  };

  return (
    <UserContext.Provider
      value={{
        userClient,
        userService,
        userClientRegister,
        userServiceRegister,
        userLogin,
        userLogout,
        spinner,
        errorApi,
        setErrorApi,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
