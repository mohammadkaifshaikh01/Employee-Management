import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Context } from "../context/ContextApi";


const Login = () => {
  const API = "https://library-assignment-s3zd.onrender.com";
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {  setIsAuth ,setToken,setRole} = useContext(Context)
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username, password };
    
    if (!username || !password) {
       toast.error("Please Fill All Fields");
       return;
      }
      console.log(userData);

    try {
      const response = await axios.post(`${API}/user/login`, userData);
      console.log(response.data);
      toast.success("Login Successfull !");
      alert("Login Successfull !");

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      setIsAuth(true);
      setToken(response.data.token);
      setRole(response.data.role);

      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      console.error(error);
      toast.error(
        "Login failed! Please try again."
      );
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen overflow-hidden">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Hello Welcome Back
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium">
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your Username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition duration-200"
            >
              Log In
            </button>

            <p className="text-center text-gray-600 mt-4">
              Not Account?
              <span
                onClick={() => navigate("/signup")}
                className="text-blue-500 cursor-pointer"
              >
                {" "}
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;