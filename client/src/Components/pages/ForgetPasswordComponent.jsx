import React, {useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { DataContext } from "../../reducer/context.js";
import { ForgetPassword } from "../../apiCalls/userApiCalls.js";

const ForgetPasswordComponent = () => {
  const { dispatchLoader } = useContext(DataContext);

  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleForgotChange = (e) => {
    const { name, value } = e.target;
    setEmail({
      ...email,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatchLoader({ type: "Set_Loading", payload: true });
      const response = await ForgetPassword(email);
      dispatchLoader({ type: "Set_Loading", payload: false });

      if (response.success) {
        setEmail({
          ...email,
          email: "",
        });
        message.success(
          "Email has been sent to reset your password, Please check your inbox."
        );
        navigate("/login");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatchLoader({ type: "Set_Loading", payload: false });
      message.error(error.message);
    }
  };
  return (
    <div>
      <div className="container mx-auto flex item-center justify-center mt-80 mb-20 w-3/4">
        <div className="p-10 shadow-2xl items- justify-between bg-contact-bg ">
          <h2 className="text-2xl font-md text-footer-bg   mb-4 ">
            Forget Password
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="Block  text-red-700 font-medium mb-4"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-input-bg border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300 mb-3 mt-1"
                placeholder="Enter your email"
                value={email.email}
                onChange={handleForgotChange}
                required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-red-700  text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordComponent;
