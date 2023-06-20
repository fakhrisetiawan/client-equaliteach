"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(
        "https://backend-equaliteach.vercel.app/api/login",
        {
          email,
          password,
        }
      );

      // Handle successful login
      console.log(response.data);
      const data = response.data;
      const token = data.token;
      const username = data.data.username;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      toast.success("Berhasil Login");
      setTimeout(() => {
        window.location.href = "https://equaliteach.netlify.app/";
      }, 1500);   
     } catch (error) {
      // Handle login error
      console.log(error);
      toast.error("Gagal Login");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="form-box login">
        <h2>Login</h2>
        <form id="login-form" onSubmit={handleSubmit}>
          <div className="input-box">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
            </span>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={handleEmailChange}
            />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-lock-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
              </svg>
            </span>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            <label>Password</label>
          </div>
          <button type="submit" className="btn-login-mail">
            {loading ? "Loading..." : "Login"}
          </button>
          <div className="login-register">
            <p>
              Don't have an account?{" "}
              <Link href="/auth/register" className="register-link">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
