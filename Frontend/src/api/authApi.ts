import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  data: {
    _id: string;
    name: string;
    email: string;
  };
  token: string;
}

export const register = async (data: RegisterData) => {
  const response = await api.post<AuthResponse>("/auth/signup", data);
  return response.data;
};

export const login = async (data: LoginData) => {
  const response = await api.post<AuthResponse>("/auth/signin", data);
  return response.data;
};

export const forgotPassword = async (email: string) => {
  const response = await api.post("/auth/forgotPassword", { email });
  return response.data;
};

export const verifyResetCode = async (
  email: string,
  resetCode: string
) => {
  const response = await api.post("/auth/verifyResetCode", {
    email,
    resetCode,
  });

  return response.data;
};

export const resetPassword = async (
  email: string,
  password: string
) => {
  const response = await api.post("/auth/resetPassword", {
    email,
    password,
  });

  return response.data;
};