import React, { useState } from "react";
import { login } from "../Services/AuthService";

export const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const userData = { email, password };
      const data = await login(userData);
      console.log("Login successful:", data);
    } catch (error: any) {
      // Handle the error properly
      const message = error.Message || "Something went wrong";
      setErrorMessage(message);
      console.log("Login failed:", error);
    }
  };

  return (
    <>
      <div>LoginView</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </>
  );
};
