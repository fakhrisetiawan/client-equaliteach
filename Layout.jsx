"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export const Layout = ({ children }) => {
  const [nama, setNama] = useState("");
  const [isMobile, setIsMobile] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("username");
    window.location.reload();
  };

  useEffect(() => {
    // This code will be executed on the client-side
    const nama = localStorage.getItem("username");
    setNama(nama);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check initial width on component mount

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <nav className="navbar" id="navbar">
        <p className="logo">EQUALITEACH</p>
        <div className={`navbar-nav ${isMenuOpen ? "active" : ""}`}>
          <Link href={"/"}>Home</Link>
          <Link href={"/content"}>Content</Link>
          <Link href="/about">About Us</Link>
          {nama != null ? (
            <>
              <a className="user">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>{" "}
                <span className="username">{nama}</span>
              </a>
              <div onClick={handleLogout} style={{ cursor: "pointer" }}>
                <a>logout</a>
              </div>
            </>
          ) : (
            <Link href={"/auth/login"} className="btn-login">
              Login
            </Link>
          )}
        </div>
        <div className="navbar-extra">
          <button id="hamburgerButton" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </nav>

      {children}
      <footer>
        <p>EQUALITEACH</p>
        <p>© 2023 Equaliteach, All Rights Reserved</p>
      </footer>
    </>
  );
};
