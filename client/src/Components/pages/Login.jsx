// src/components/LoginForm.js

import React, { useEffect, useContext } from "react";
import { FaFacebookSquare, FaInstagramSquare, FaGoogle } from "react-icons/fa";
import { LoginUser } from "../../apiCalls/userApiCalls.js";
import { useNavigate } from "react-router-dom";
import AppLogo from "../../Components/Logo.jsx";
import { message } from "antd";
import { DataContext } from "../../reducer/context.js";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import ForgetPasswordComponent from "./ForgetPasswordComponent.jsx";

const LoginForm = () => {
  const { dispatchLoader, loginData, setLoginData, isOpen } =
    useContext(DataContext);
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatchLoader({ type: "Set_Loading", payload: true });
      const response = await LoginUser(loginData);
      dispatchLoader({ type: "Set_Loading", payload: false });
      if (response.success) {
        // Handle successful login here, e.g., show a success message or redirect
        setLoginData({
          ...loginData,
          email: "",
          password: "",
        });
        console.log("Login successful:", response.message);

        message.success(response.message);
        localStorage.setItem("token", response.token);
        navigate("/profile");
      } else {
        // Handle login failure, e.g., display an error message
        throw new Error('please provide correct email or password');
      }
    } catch (error) {
      console.log(error.message); // Check if error message is being logged
      dispatchLoader({ type: "Set_Loading", payload: false });
      message.error(error.message);
    }
    console.log("email", loginData.email);
    console.log("password", loginData.password);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
    }
  }, []);
  return (
    <div
      className={`relative bg-gray-200 h-30 mx-auto shadow-2xl ${
        isOpen
          ? `top-80 transition-all duration-1000`
          : `top-1 transition-all duration-1000 `
      } `}
    >
      <h2 className="pt-8 group relative uppercase hover:scale-110 hover:text-footer-bg text-red-700 font-normal text-2xl md:mx-auto md:w-1/2">
        Login
        {/* <span className="absolute w-28 right-56 h-0.5 bg-text-bg rounded-lg transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 mt-10 md:w-20 md:left-1/4 md:ml-48"></span> */}
      </h2>
      <div className="container mx-auto flex item-center justify-center mt-10 mb-52 w-3/4">
        <div className="flex flex-col p-10 shadow-2xl gap-10 justify-between bg-contact-bg md:flex-row">
          <div className="mt-10 h-64 w-64 md:h-52 w-52 -mb-20 mx-auto">
            <AppLogo />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="Block  text-red-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-input-bg border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-red-800 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-input-bg border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-red-700  text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
              >
                Login
              </button>
              <div className="flex items-center justify-around mt-2 px-10 py-2">
                <div className="flex items-center space-x-2 text-blue-700 text-2xl">
                  <FaFacebookSquare />
                </div>
                <div className="flex items-center space-x-2 text-purple-800 text-2xl">
                  <FaInstagramSquare />
                </div>
                <div className="flex items-center space-x-2 text-red-700 text">
                  <FaGoogle />
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-800 hover:underline">
                  Register
                </Link>
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-600">
                <Link
                  to="/forgot-password"
                  className="text-footer-bg hover:underline text-text-bg"
                >
                  ForgetPassword
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
