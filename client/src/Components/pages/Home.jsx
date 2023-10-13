import React, { useContext } from "react";
import HomePage from "../../Images/HomePage.jpg";
import { Link } from "react-router-dom";
import { Button } from "antd";
import Footer from "./Footer.jsx";
import { DataContext } from "../../reducer/context";

// Replace with the correct path to your background image

const Home = () => {
  // Define a style object with the background image
  const { isOpen } = useContext(DataContext);
  const backgroundStyle = {
    backgroundImage: `url(${HomePage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    minHeight: "90vh",
    //backgroundColor:"rgba(0,0,0,0.5)"
  };

  return (
    <div>
      <div style={backgroundStyle} class="">
        <div
          className={`relative bg-gray-200 md:relative  md:top-32  opacity-80  w-1/2 h-30  mx-auto shadow-2xl ${
            isOpen
              ? `top-96 transition-all duration-1000 `
              : `top-32 transition-all duration-1000 `
          } `}
        >
          {/* <div className='f flex-col justify-center items-center inset-0 bg-black opacity-80 absolute  top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-black  text-black'> */}
          <h1 className="text-4xl text-footer-bg p-4 text-center">
            Give <span className="text-text-bg"> Blood</span>, Save Life!
          </h1>

          <p className="text-footer-bg font-serif text-lg text-center pb-3 w-2/3 mx-auto font-semibold">
            Blood Share is designed to bridge the gap between blood donors and
            individuals in need of blood,making it easier to save lives through
            blood donation.
          </p>
        </div>
        <div className="relative">
          <Link to="/login">
            <button
              className={`bg-text-bg font-semibold text-white text-lg absolute right-1/4 px-6 py-2 hover:text-white border-red rounded-lg hover:scale-110 ${
                isOpen
                  ? `top-96 mt-4 transition-all duration-1000 `
                  : `top-44 -mt-6 transition-all duration-1000`
              }`}
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
