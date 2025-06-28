import React, { useEffect, useState } from "react";
import { register } from "../../Services/AuthService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export const RegistrationView = () => {
  const { user } = useAuth(); // ✅ correct

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/my-formania");
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const userData = { email, password, username };
      const data = await register(userData);
      console.log("successfull registration", data);
      navigate("/login");
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };
  return (
    <div>
      <div>Registration View</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">User Name :</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Sign Up</button>
      </form>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </div>
  );
};
