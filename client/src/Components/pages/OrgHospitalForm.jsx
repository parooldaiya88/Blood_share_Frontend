import React from "react";

const OrgHospitalForm = ({ type, formData, handleDonorChange }) => {
  return (
    <div className='container mx-auto mt-10'>
      <label
        htmlFor={type === "hospital" ? "hospitalName" : "organizationName"}
        className='block text-input-label font-medium mb-2'
      >
        {type === "hospital" ? "Hospital Name" : "Organization Name"}
      </label>
      <input
        type='text'
        id={type === "hospital" ? "hospitalName" : "organizationName"}
        name={type === "hospital" ? "hospitalName" : "organizationName"}
        value={
          formData.hospitalName
            ? formData.hospitalName
            : formData.organizationName
        }
        onChange={handleDonorChange}
        className='w-full bg-input-bg border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300'
        required
      />
      <div className='mb-4'>
        <label
          htmlFor='email'
          className='block text-input-label font-medium mb-2'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleDonorChange}
          className='w-full bg-input-bg border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300'
          required
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='password'
          className='block text-input-label font-medium mb-2'
        >
          Password
        </label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleDonorChange}
          className='w-full bg-input-bg border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300'
          required
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='phone'
          className='block text-input-label font-medium mb-2'
        >
          Phone
        </label>
        <input
          type='text'
          id='phone'
          name='phone'
          value={formData.phone}
          onChange={handleDonorChange}
          className='w-full bg-input-bg border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300'
          required
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='address'
          className='block text-input-label font-medium mb-2'
        >
          Address
        </label>
        <textarea
          id='address'
          name='address'
          rows={4}
          cols={12}
          value={formData.address}
          onChange={handleDonorChange}
          className='w-full bg-input-bg border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300'
          required
        />
      </div>
    </div>
  );
};
export default OrgHospitalForm;
