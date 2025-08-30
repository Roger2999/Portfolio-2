import { create } from "zustand";
const TOKEN_KEY = "auth-token";
const USER_KEY = "auth-user";

interface AuthState {
  email: string | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, token: string) => void;
  logout: () => void;
}

// Leer datos iniciales de localStorage
const getInitialToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};
const getInitialUser = () => {
  return localStorage.getItem(USER_KEY);
};

export const AuthStore = create<AuthState>((set) => ({
  email: getInitialUser(),
  token: getInitialToken(),
  isAuthenticated: !!getInitialToken(),
  login: (email, token) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, email);
    set({ token, email, isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    set({ token: null, email: null, isAuthenticated: false });
  },
}));
