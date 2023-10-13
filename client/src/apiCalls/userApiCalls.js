import { axiosInstance } from "./axiosInstance";

//LoginUser is called in Login.jsx
export const LoginUser = async (payload) => {
  const response = await axiosInstance(
    "post",
    "https://blood-share-backend2.onrender.com/users/login",
    payload
  );
  return response;
};
  

// ForgetPassword is called in ForgetPasswordComponent.jsx
export const ForgetPassword = async (payload) => {
  const response = await axiosInstance(
    "post",
    "https://blood-share-backend2.onrender.com/users/forgot-password",
    payload
  );
  return response;
};


// ResetPassword is called in ResetPasswordComponent.jsx
export const ResetPassword = async (id, token, payload) => {
  const response = await axiosInstance(
    "post",
    `https://blood-share-backend2.onrender.com/users/reset-password/${id}/${token}`,
    payload
  );
  return response;
};
//RegisterUser is called in Register.jsx
export const RegisterUser = async (payload) => {
  const response = await axiosInstance(
    "post",
    "https://blood-share-backend2.onrender.com/users/register",
    payload
  );
  return response;
};

//GetCurrentUser is called in ProtectPage.jsx inside getCurrentUser()
export const GetCurrentUser = async () => {
  const response = await axiosInstance(
    "get",
    "https://blood-share-backend2.onrender.com/users/get-current-user"
  );
  return response;
};

//* To get all the donors for organization profile

export const GetAllDonors = async () => {
  const response = await axiosInstance(
    "get",
    "https://blood-share-backend2.onrender.com/users/get-all-donors"
  );
  return response;
};

//* To get all the Hospitals
export const GetAllHospitals = async () => {
  const response = await axiosInstance(
    "get",
    "https://blood-share-backend2.onrender.com/users/get-all-hospitals"
  );
  return response;
};

// To get all the Organization for donor
export const GetDisplayedOrganizationsForDonor = async () => {
  const response = await axiosInstance(
    "get",
    "https://blood-share-backend2.onrender.com/users/get-displayed-organizations-for-donor"
  );
  return response;
};

// To get all the Organization for hospital
export const GetDisplayedOrganizationsForHospital = async () => {
  const response = await axiosInstance(
    "get",
    "https://blood-share-backend2.onrender.com/users/get-displayed-organizations-for-hospital"
  );
  return response;
};
