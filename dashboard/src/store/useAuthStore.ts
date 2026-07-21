import { create } from "zustand";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  avatar?: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // Helper action / getter
  isLoggedIn: () => boolean;

  login: (user: User, token: string) => void;
  logout: () => void;
  setUser: (user: User) => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  accessToken: null,
  isAuthenticated: false,
  isLoading: true,

  // Returns true if user exists and isAuthenticated is true
  isLoggedIn: () => Boolean(get().user && get().isAuthenticated),

  login: (user, token) =>
    set({
      user,
      accessToken: token,
      isAuthenticated: true,
      isLoading: false,
    }),

  logout: () =>
    set({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      isLoading: false,
    }),

  setUser: (user) =>
    set({
      user,
      isAuthenticated: true,
    }),

  setLoading: (loading) =>
    set({
      isLoading: loading,
    }),
}));