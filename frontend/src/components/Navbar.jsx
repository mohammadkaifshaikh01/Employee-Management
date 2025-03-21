import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../context/ContextApi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { isAuth, role, setIsAuth } = useContext(Context); 
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between text-sm py-3 mb-5 border-b border-b-gray-400 px-5">
      {/* Logo */}
      <img
        src="https://www.library-management.com/uploads/60196c0c6f3a8_logo_.png"
        alt="logo"
        className="w-33 h-11 cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* Desktop Menu */}
      <div className="flex items-center gap-4">
        {!isAuth && (
          <button
            className="cursor-pointer bg-blue-500 py-2 text-white px-7 rounded-full font-light hidden md:block"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}

        {isAuth && role === "admin" && (
          <button
            className="cursor-pointer bg-orange-500 py-2 text-white px-7 rounded-full font-light hidden md:block"
            onClick={() => navigate("/add-book")}
          >
            Add Book
          </button>
        )}

        {isAuth && (
          <button
            className="cursor-pointer bg-red-500 py-2 text-white px-7 rounded-full font-light hidden md:block"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 cursor-pointer"
            onClick={() => setShowMenu(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between px-5 py-6 border-b">
          <h1 className="font-semibold text-lg">MENU</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            onClick={() => setShowMenu(false)}
            className="w-8 h-8 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        <ul className="flex flex-col items-start gap-4 p-5 text-lg font-medium">
          <NavLink onClick={() => setShowMenu(false)} to="/dashboard">
            DASHBOARD
          </NavLink>
          {!isAuth && (
            <NavLink onClick={() => setShowMenu(false)} to="/login">
              Login
            </NavLink>
          )}
          {isAuth && role === "admin" && (
            <NavLink onClick={() => setShowMenu(false)} to="/add-book">
              Add Book
            </NavLink>
          )}
          {isAuth && (
            <button
              className="mt-2 bg-red-500 py-2 text-white px-5 rounded-lg w-full text-center"
              onClick={() => {
                setShowMenu(false);
                handleLogout();
              }}
            >
              Logout
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;