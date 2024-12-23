import { useState } from "react";
import axios from "axios";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:7000/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg">
      <h2 className="text-2xl mb-4">Login</h2>
      <input
        type="email"
        className="w-full p-2 mb-4 border rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full p-2 mb-4 border rounded"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-full p-2 bg-blue-500 text-white rounded"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
