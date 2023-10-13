import { axiosInstance } from "./axiosInstance";

// This is connected to userSupplyController inside supplyController.js which is called inside SupplyForm.jsx
export const AddSupply = async (payload) => {
  const response = await axiosInstance(
    "post",
    "https://blood-share-backend2.onrender.com/supply/add",
    payload
  );
  return response;
};

//This is connected to getSupplyController inside supplyController.js which is called inside Supply.jsx which is displayed on organization dashboard(on browser)
export const GetSupply = async (page, limit = 8) => {
  const response = await axiosInstance(
    "get",
    `https://blood-share-backend2.onrender.com/supply/get?page=${page}&limit=${limit}`
  );
  return response;
};

// This is connected with utilizationOfBloodSupplyController inside supplyController.js which is called inside Supply.jsx which is shown SupplyTable.jsx
export const UtilizationOfBloodSupply = async () => {
  const response = await axiosInstance(
    "get",
    "https://blood-share-backend2.onrender.com/supply/utilization"
  );
  return response;
};

// This is connected with donationOfBloodSupplyController inside supplyController.js which is called inside Supply.jsx which is shown SupplyTable.jsx
export const DonationOfBloodSupply = async () => {
  const response = await axiosInstance(
    "get",
    "https://blood-share-backend2.onrender.com/supply/donation"
  );
  return response;
};

// This is connected with getAllBloodGroupsController inside supplyController.js which is called inside Supply.jsx which is shown SupplyTable.jsx
export const GetAllBloodGroups = async () => {
  const response = await axiosInstance(
    "get",
    "https://blood-share-backend2.onrender.com/dashboard/get-bloodGroups"
  );
  return response;
};
