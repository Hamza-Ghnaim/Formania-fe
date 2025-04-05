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
  console.log(state);
  // Fetch user on app load
  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       // Use Axios to make the request
  //       const response = await axios.get("http://localhost:5000/auth/me", {
  //         withCredentials: true,
  //       });

  //       if (response.status === 200) {
  //         console.log("response ok");
  //         dispatch({ type: "LOGIN", payload: response.data.user });
  //       } else {
  //         console.log("response false");
  //         dispatch({ type: "LOGOUT" });
  //       }
  //     } catch (error) {
  //       console.error("Error checking authentication:", error);
  //       dispatch({ type: "LOGOUT" });
  //     }
  //   };

  //   checkAuth();
  //   console.log("i was ran");
  // }, []);

  // Expose actions
  const login = (user: { id: string; email: string }) => {
    dispatch({ type: "LOGIN", payload: user });
  };

  const logout = async () => {
    await fetch("http://localhost:5000/logout", {
      method: "POST",
      credentials: "include",
    });
    dispatch({ type: "LOGOUT" });

    // window.location.href = "auth/login";
  };

  const checkAuth = async () => {
    try {
      const res = await axios.get("http://localhost:5000/auth/check", {
        withCredentials: true, // Send HTTP-only cookies
      });
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
