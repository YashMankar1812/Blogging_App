import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:7000/auth/SignUp", { email, password });
      alert(response.data.message); // or handle it as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg">
      <h2 className="text-2xl mb-4">Sign Up</h2>
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
        onClick={handleSignUp}
      >
        Sign Up
      </button>
    </div>
  );
}

export default SignUp;
