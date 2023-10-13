import React, { useContext, useEffect } from "react";
import { DataContext } from "../reducer/context.js";
import { AddAppointment } from "../apiCalls/appointmentApi.js";
import { message } from "antd";

const Appointment = () => {
  const {
    dispatchLoader,
    appointment,
    setAppointment,
  } = useContext(DataContext);

  const handleAppointmentChange = (e) => {
    const { name, value } = e.target;
    setAppointment({
      ...appointment,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatchLoader({ type: "Set_Loading", payload: true });
      const response = await AddAppointment(
        appointment
        // donor: currentUser._id,
      );
      dispatchLoader({ type: "Set_Loading", payload: false });
      if (response.success) {
        setAppointment({
          ...appointment,
          name: "",
          date: "",
          time: "",
          phone: "",
        });

        message.success("Appointment added successfully");
        localStorage.setItem("token", response.token);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatchLoader({ type: "Set_Loading", payload: false });
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      
    }
  }, []);
  return (
    <div className='w-96 mx-auto shadow-xl mt-36 p-8 mb-20 bg-contact-bg'>
      <h1 className='text-text-bg text-center text-2xl mt-10 p-2 '>
        Appointment Form
      </h1>
      <form className='mt-12 mb-16 w-50' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-red-800 font-medium mb-2'>
            Your Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={appointment.name}
            onChange={handleAppointmentChange}
            className=' w-full bg-input-bg border-b border-gray-300 rounded-md p-2 focus:outline-none'
            placeholder='Enter your name'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='date' className='block text-red-800 font-medium mb-2'>
            Date
          </label>
          <input
            type='date'
            id='date'
            name='date'
            value={appointment.date}
            onChange={handleAppointmentChange}
            className='w-full bg-input-bg border-gray-300 rounded-md p-2 focus:outline-none '
            placeholder='Select a date'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='time' className='block text-red-800 font-medium mb-2'>
            Time
          </label>
          <input
            type='time'
            id='time'
            name='time'
            value={appointment.time}
            onChange={handleAppointmentChange}
            className='w-full bg-input-bg border-gray-300 rounded-md p-2 focus:outline-none '
            placeholder='Select a time'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='phone'
            className='block text-red-800 font-medium mb-2'
          >
            Phone
          </label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={appointment.phone}
            onChange={handleAppointmentChange}
            className='w-full bg-input-bg border-gray-300 rounded-md p-2 focus:outline-none'
            placeholder='Enter your phone number'
          />
        </div>
        <div className='mb-6 text-center'>
          <button
            type='submit'
            className='bg-text-bg font-semibold text-white text-lg px-6 py-2 mt-4 hover:text-white border-red rounded-lg transform transition-transform hover:scale-110'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Appointment;
