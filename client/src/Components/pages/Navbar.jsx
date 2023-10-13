import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaX } from "react-icons/fa6";
import AppLogo from "../../Images/AppLogo.png";
import HomePage from "../../Images/HomePage.jpg";
import { DataContext } from "../../reducer/context";

const Navigation = () => {
  const backgroundStyle = {
    backgroundImage: `url(${HomePage})`,
    backgroundSize: "1/2",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    minHeight: "",
    //backgroundColor:"rgba(0,0,0,0.5)"
    opacity: "",
  };
  const { isOpen, setIsOpen } = useContext(DataContext);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className="animate-divLoad shadow-xl w-full h-20"
      style={backgroundStyle}
    >
      <div className="flex translate-y-2 justify-between items-center py-0 md:px-10 px-7">
        <div>
          {" "}
          <span className="block w-20 h-5 opacity-250 ">
            <img src={AppLogo} alt="logo" />
          </span>
          <h1 className="group relative mx-20 uppercase text-xl  text-text-bg hover:scale-110">
            Blood Share
            <span className="absolute -left-0.5 w-full h-0.5 bg-text-bg rounded-lg transform scale-x-0  transition-transform duration-300 group-hover:scale-x-100 mt-7 "></span>
          </h1>
          <div className="text-4xl absolute right-8 top-1/4 bottom-1/4 cursor-pointer md:hidden text-footer-bg">
            <button onClick={toggleNavbar}>
              {isOpen ? <FaX /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* <div className='text-2xl absolute right-8  cursor-pointer md:hidden'>
          <button onClick={toggleNavbar}>
            {isOpen ? <FaX /> : <FaBars />}
          </button>
        </div> */}
        <ul
          className={`
          mt-4 rounded-lg transition-all duration-1000 
          w-full
          pt-10
          md:mt-0
          md:transition-none 
          bg-slate-100 md:bg-transparent md:flex md:items-center md:justify-center items-center 
          md:pb-0 pb-12 absolute 
          md:static left-0 md:w-auto
          
          md:pl-0 pl-9 md:py-4 font-normal text-md   ${
            isOpen ? `top-14 opacity-100 ` : `top-[-490px]`
          } md:opacity-100 opacity-100`}
        >
          <li className="w-full  md:border-none text-center md:ml-8 md:my-0 my-7 transform transition-transform hover:scale-125">
            <Link
              to="/"
              className=" ease-in-out hover:duration-700 p-4  uppercase text-text-bg py-5 hover:text-footer-bg"
            >
              Home
            </Link>
          </li>

          <li className="w-full md:border-none text-center md:ml-8 md:my-0 my-7 transform transition-transform hover:scale-125 ">
            <Link
              to="/about"
              className="ease-in-out hover:duration-700 p-4  uppercase text-text-bg py-5  hover:text-footer-bg"
            >
              About
            </Link>
          </li>
          <li className="w-full md:border-none text-center md:ml-8 md:my-0 my-7 md:transform transition-transform hover:scale-125">
            <Link
              to="/login"
              className="ease-in-out hover:duration-700 p-4  uppercase text-text-bg py-5  hover:text-footer-bg"
            >
              Login
            </Link>
          </li>
          <li className="w-full  md:border-none  text-center md:ml-8 md:my-0 my-7 transform transition-transform hover:scale-125">
            <Link
              to="/register"
              className="ease-in-out hover:duration-700 p-4  uppercase text-text-bg py-5  hover:text-footer-bg"
            >
              Register
            </Link>
          </li>
          <li className="w-full  md:border-none text-center md:ml-8 md:my-0 my-7md:transform transition-transform hover:scale-125">
            <Link
              to="/ContactPage"
              className="ease-in-out hover:duration-700 p-4  uppercase text-text-bg py-5  hover:text-footer-bg"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
