import React, { useEffect, useContext } from "react";
import { message } from "antd";
import { GetCurrentUser } from "../apiCalls/userApiCalls.js";
import { useNavigate } from "react-router-dom";
import { getLoggedInUserName } from "../utils/helpers.js";

import { DataContext } from "../reducer/context.js";

const ProtectPage = ({ children }) => {
  const { dispatchLoader, dispatchUser, userState } = useContext(DataContext);

  const navigate = useNavigate();

  const getCurrentUser = async () => {
    try {
      dispatchLoader({ type: "Set_Loading", payload: true });
      const response = await GetCurrentUser();

      dispatchLoader({ type: "Set_Loading", payload: false });
      if (response.success) {
        message.success(response.message);

        dispatchUser({ type: "SET_CURRENT_USER", payload: response.data });
        console.log(response.data); // It is an object of currentUser that has loggedIn frontend
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatchLoader({ type: "Set_Loading", payload: false });
      message.error(error.message);
    }
  };

  const { currentUser, isUserRegistered } = userState; //! created isUserRegistered

  useEffect(() => {
    if (localStorage.getItem("token")) {
      //if user is registered call this function getCurrentUser
      if (!isUserRegistered) {
        getCurrentUser();
      } else {
        navigate("/register");
      }
    } else {
      navigate("/login");
    }
  }, []);
   

  //getLoggedInUsername is present inside helpers.js in utils folder
  return (
    currentUser && (
      <div>
        {/* header */}
        <div className='flex justify-between items-center font-semibold px-5 py-3'>
          <div>
            <span className='text-xl text-text-bg -ml-2 tracking-widest'>
              {currentUser.userType.toUpperCase()}
            </span>
          </div>

          <div className='flex item-center gap-1'>
            <i className='ri-map-pin-user-fill text-2xl text-text-bg tracking-widest'></i>
            <div className='flex flex-col'>
              <span
                className='mr-5 text-md cursor-pointer text-2xl text-text-bg'
                onClick={() => navigate("/profile")}
              >
                {getLoggedInUserName(currentUser).toUpperCase()}
              </span>
            </div>
            <div>
            <i
              className='ri-logout-circle-r-line ml-5 cursor-pointer text-red-700 text-2xl shadow-md  px-3 py-3 rounded-full'
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            ></i>
            </div>
          </div>
        </div>

        {/* body */}
        <div className='px-5 py-2'>{children}</div>
      </div>
    )
  );
};
export default ProtectPage;
