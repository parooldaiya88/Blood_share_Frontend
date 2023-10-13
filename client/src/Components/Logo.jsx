
import React from "react";
// import logoImage from "./Logo.jpg"; // Replace with the actual path to your logo image
import logoImage from "../Images/AppLogo.png"


const Logo = () => {
  return (
    <img
      src={logoImage}
      alt="Logo"
      className="w-25 h-25 border border-none rounded-full"
    />
  );
};

export default Logo;