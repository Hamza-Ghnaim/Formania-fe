import React, { createContext, useContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
import axios from "axios";

// Define the shape of the authentication state
interface AuthState {
  user: { id: string; email: string } | null;
  loading: boolean;
}

// Define the shape of the authentication context
interface AuthContextType extends AuthState {
  login: (user: { id: string; email: string }) => void;
  logout: () => void;
}

// Initial state
const initialState: AuthState = {
  user: null,
  loading: true,
};

// Create context with a default value
const AuthContext = createContext<AuthContextType | any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Expose actions
  const login = (user: { id: string; email: string }) => {
    dispatch({ type: "LOGIN", payload: user });
  };

  const logout = async () => {
    await fetch("http://localhost:5001/logout", {
      method: "POST",
      credentials: "include",
    });
    dispatch({ type: "LOGOUT" });
  };

  const checkAuth = async () => {
    try {
      const res = await axios.get("http://localhost:5001/auth/check", {
        withCredentials: true, // Send HTTP-only cookies
      });
      console.log("checkAuth is:", res);
      dispatch({ type: "LOGIN", payload: res.data });
    } catch (error: any) {
      // Optional: handle unauthorized (e.g., token not present or invalid)
      console.log("User not authenticated:", error.response?.status);
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context safely
export const useAuth = () => {
  return useContext(AuthContext);
};
