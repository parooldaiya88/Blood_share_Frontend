import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";
import { DataContext } from "../../reducer/context.js";
import { ResetPassword } from "../../apiCalls/userApiCalls.js";

const ResetPasswordComponent = () => {
  const { dispatchLoader } = useContext(DataContext);
  const { id, token } = useParams();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleForgotChange = (e) => {
    const { name, value } = e.target;
    setPassword({
      ...password,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatchLoader({ type: "Set_Loading", payload: true });
      const response = await ResetPassword(id, token, password);
      dispatchLoader({ type: "Set_Loading", payload: false });
      if (response.success) {
        setPassword({
          ...password,
          password: "",
        });
        
        navigate("/login");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatchLoader({ type: "Set_Loading", payload: false });

    }
  };
  return (
    <div>
      <div className="container mx-auto flex item-center justify-center mt-80 mb-20 w-3/4">
        <div className="p-10 shadow-2xl items- justify-between bg-contact-bg ">
          <h2 className="text-2xl font-md text-footer-bg mb-4  ">
            Reset Password
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="Block  text-red-700 font-medium "
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-input-bg border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300 mt-2 mb-4"
                placeholder="Enter your password"
                value={password.password}
                onChange={handleForgotChange}
                required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-red-700  text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordComponent;
