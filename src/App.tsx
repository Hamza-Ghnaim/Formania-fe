import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { HomeView } from "./views/Pages/HomeView";
import "./App.css";
import { LoginView } from "./views/Pages/LoginView";
import { RegistrationView } from "./views/Pages/RegistrationView";
import MyFormania from "./views/Pages/MyFormania";
import { useAuth } from "./Context/AuthContext";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const { checkAuth, state } = useAuth();
  useEffect(() => {
    checkAuth();
  }, [navigate]);
  console.log(state);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegistrationView />} />
        <Route path="/my-formania" element={<MyFormania />} />
      </Routes>
    </div>
  );
}

export default App;
