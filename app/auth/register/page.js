"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

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
        "https://server-equaliteach-rho.vercel.app/api/register",
        {
          username,
          email,
          password,
        }
      );

      // Handle successful registration
      toast.success(`Register Berhasil. Silahkan Login`);
      router.replace("/auth/login");
    } catch (error) {
      // Handle registration error
      toast.success("Register Gagal. Silahkan coba lagi");
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="form-box login">
        <h2>Register</h2>
        <form id="register-form" onSubmit={handleSubmit}>
          <div className="input-box">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
            </span>
            <input
              type="text"
              id="register-username"
              required
              value={username}
              onChange={handleUsernameChange}
            />
            <label>Username</label>
          </div>
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
              type="email"
              id="register-email"
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
              type="password"
              id="register-password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            <label>Password</label>
          </div>
          <button type="submit" className="btn-login-mail">
            {loading ? "Loading" : "Register"}
          </button>
          <div className="login-register">
            <p>
              Already have an account?{" "}
              <Link href={"/auth/login"} className="login-link">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
