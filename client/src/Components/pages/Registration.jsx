import React, { /* useState */ useEffect, useContext } from "react";
import OrgHospitalForm from "./OrgHospitalForm.jsx";
import { Link } from "react-router-dom";
import { RegisterUser } from "../../apiCalls/userApiCalls.js";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../reducer/context.js";
import Footer from "./Footer.jsx";
import { message } from "antd";
/* import Navigation from "./Navbar.jsx"; */
const RegistrationForm = () => {
  const { dispatchLoader, type, setType, formData, setFormData, isOpen } =
    useContext(DataContext);
  const navigate = useNavigate();
  const handleDonorChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      //[name] refers to Key name and value refers to e.target.value
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatchLoader({ type: "Set_Loading", payload: true });
      formData.userType = type;
      // Remove irrelevant fields based on user type
      if (formData.userType === "donor") {
        delete formData.address;
        delete formData.hospitalName;
        delete formData.organizationName;
      } else if (formData.userType === "hospital") {
        delete formData.age;
        delete formData.name;
        delete formData.organizationName;
      } else {
        delete formData.age;
        delete formData.name;
        delete formData.hospitalName;
      }
      // RegisterUser is present in userApiCalls.js
      const response = await RegisterUser(formData);
      dispatchLoader({ type: "Set_Loading", payload: false });
      //  console.log("Form Data:", formData);
      if (response.success) {
        // Handle successful registration here, e.g., show a success message or redirect
        navigate("/login");
        setFormData({
          ...formData,
          userType: type,
          name: "",
          age: "",
          email: "",
          password: "",
          phone: "",
          hospitalName: "",
          organizationName: "",
          address: "",
        });
        dispatchLoader({ type: "Set_Loading", payload: false }); //
        message.success("Registration successful");
        //console.log("Registration successful:", response.message);
      }
      if (formData.password.length < 8) {
        message.error("Password must be at least 8 characters");
      } else if (formData.age.length < 18) {
        message.error("Age must be at least 18 years");
      } else {
        throw new Error(response.message);
      }
      //console.error("Registration failed:", response.message);
    } catch (error) {
      // Handle unexpected errors, e.g., network issues or server problems
      console.error("An error occurred during registration:", error.message);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={`relative bg-gray-200 h-30 mx-auto shadow-2xl ${
        isOpen
          ? `top-80 transition-all duration-1000`
          : `top-1 transition-all duration-1000 `
      } `}
    >
      <h2 className="mb-8 pt-8 group relative uppercase hover:scale-110 hover:text-footer-bg text-red-700 font-normal text-2xl pt-20 md:mx-auto md:w-1/2">
        Registration
        {/* <span className="absolute w-52 right-44 h-0.5 bg-text-bg rounded-lg transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 mt-10 md:w-52 md:left-1/4 md:ml-32"></span> */}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 pt-10 mt-6 rounded-md shadow-lg bg-contact-bg mb-20"
      >
        <div className="space-y-5">
          <label className="inline-flex  items-center mr-2">
            <input
              type="radio"
              value="donor"
              name="userType"
              checked={type === "donor"}
              onChange={(e) => setType(e.target.value)}
              className="form-radio text-blue-600 h-5 w-5"
            />
            <span className="ml-2">Donor</span>
          </label>
          <label className="inline-flex items-center mr-2">
            <input
              type="radio"
              value="hospital"
              name="userType"
              checked={type === "hospital"}
              onChange={(e) => setType(e.target.value)}
              className="form-radio text-blue-600 h-5 w-5"
            />
            <span className="ml-2">Hospital</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="organization"
              name="userType"
              checked={type === "organization"}
              onChange={(e) => setType(e.target.value)}
              className="form-radio text-blue-600 h-5"
            />
            <span className="ml-2">Organization</span>
          </label>
        </div>
        {type === "donor" && (
          <>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="Block text-input-label font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleDonorChange}
                className="w-full bg-input-bg border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="age"
                className="Block text-input-label font-medium mb-2"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleDonorChange}
                className="w-full bg-input-bg border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="Block text-input-label font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleDonorChange}
                className="w-full bg-input-bg border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="Block text-input-label font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleDonorChange}
                className="w-full bg-input-bg border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="Block text-input-label font-medium mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleDonorChange}
                className="w-full bg-input-bg border-blue-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
          </>
        )}
        {type !== "donor" && (
          <OrgHospitalForm
            type={type}
            formData={formData}
            handleDonorChange={handleDonorChange}
          />
        )}
        <button
          type="submit"
          className="w-full bg-button-bg text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
        >
          Register
        </button>
        <div className="text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
      <Footer />
    </div>
  );
};
export default RegistrationForm;