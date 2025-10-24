import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../api/api";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    async function handleLogin(e) {
        e.preventDefault();
        try {
            const res = await api.post("/auth/login",{ email, password });
            localStorage.setItem("token", res.data.token);
                navigate("/admin/dashboard");
            
        } catch (error) {
            setError("Login failed. Please try again.");
        }
    }
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-md w-80"
        >
          <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full mb-3 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full mb-4 rounded"
          />
          <button className="bg-blue-600 text-white w-full py-2 rounded">
            Đăng nhập
          </button>
        </form>
      </div>
    );
 }