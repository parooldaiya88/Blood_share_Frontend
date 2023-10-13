import { axiosInstance } from "./axiosInstance";

// This is connected to addAppointmentController inside appointmentController.js which is called inside Appointment.jsx
export const AddAppointment = async (payload) => {
  const response = await axiosInstance(
    "post",
    "https://blood-share-backend2.onrender.com/appointment/add-appointment",
    payload
  );
  return response;
};

