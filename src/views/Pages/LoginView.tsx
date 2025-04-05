import React, { useEffect, useState } from "react";
import { login as login_axios } from "../../Services/AuthService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
export const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login, user } = useAuth(); // ✅ correct
  // useEffect(() => {
  //   const handleLogout = async () => {
  //     await logout();
  //     navigate("/login");
  //   };
  //   handleLogout();
  // }, []);

  useEffect(() => {
    if (user) {
      navigate("/my-formania");
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const userData = { email, password };
      const data = await login_axios(userData);
      console.log("Login successful:", data);
      login(data);
      navigate("/my-formania");
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
