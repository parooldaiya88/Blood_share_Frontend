import { axiosInstance } from "./axiosInstance";

// This is connected to userSupplyController inside supplyController.js which is called inside SupplyForm.jsx
export const AddSupply = async (payload) => {
  const response = await axiosInstance(
    "post",
    "http://localhost:8000/supply/add",
    payload
  );
  return response;
};

//This is connected to getSupplyController inside supplyController.js which is called inside Supply.jsx which is displayed on organization dashboard(on browser)
export const GetSupply = async (page, limit = 8) => {
  const response = await axiosInstance(
    "get",
    `http://localhost:8000/supply/get?page=${page}&limit=${limit}`
  );
  return response;
};

// This is connected with utilizationOfBloodSupplyController inside supplyController.js which is called inside Supply.jsx which is shown SupplyTable.jsx
export const UtilizationOfBloodSupply = async () => {
  const response = await axiosInstance(
    "get",
    "http://localhost:8000/supply/utilization"
  );
  return response;
};

// This is connected with donationOfBloodSupplyController inside supplyController.js which is called inside Supply.jsx which is shown SupplyTable.jsx
export const DonationOfBloodSupply = async () => {
  const response = await axiosInstance(
    "get",
    "http://localhost:8000/supply/donation"
  );
  return response;
};

// This is connected with getAllBloodGroupsController inside supplyController.js which is called inside Supply.jsx which is shown SupplyTable.jsx
export const GetAllBloodGroups = async () => {
  const response = await axiosInstance(
    "get",
    "http://localhost:8000/dashboard/get-bloodGroups"
  );
  return response;
};
