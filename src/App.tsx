import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import "./App.css";
import { LoginView } from "./views/LoginView";
import { RegistrationView } from "./views/RegistrationView";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegistrationView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
