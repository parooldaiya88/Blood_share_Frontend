
import React, {  useEffect, useContext } from "react";
import { message } from "antd";
import { Pie } from "react-chartjs-2";
import {Chart, ArcElement } from 'chart.js/auto';
import { DataContext } from "../../../../reducer/context.js";
import { GetAllBloodGroups } from "../../../../apiCalls/supplyApi.js";
//This component is rendering inside profile.jsx
//GetAllBloodGroups function is made inside SupplyApi.js and called here
const DashboardOrg = () => {
  const { dispatchLoader,bloodGroups, setBloodGroups} = useContext(DataContext);
  const getAllBloodGroups = async () => {
    try {
      dispatchLoader({ type: "Set_Loading", payload: true });
      const response = await GetAllBloodGroups();
      dispatchLoader({ type: "Set_Loading", payload: false });
      if (response.success) {
        message.success(response.message);
        setBloodGroups(response.data);
        // console.log(response.data);//response data contains an array of available,totalIn,totalOut,bloodGroups
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatchLoader({ type: "Set_Loading", payload: false });
      message.error(error.message);
    }
  };
  useEffect(() => {
    getAllBloodGroups();
  }, []);
  return (
    <div>
      <div className=' pie-chart grid grid-cols-6 gap-5 mt-10'>
        {bloodGroups.map((bloodGroup, index) => {
          return (
            <div className='p-3' key={index}>
              <h1 className='text-4xl uppercase ^'>{bloodGroup.bloodGroup}</h1>
              <div className='bg-white shadow-md rounded-md w-full h-full '>
                <PieChart bloodGroupData={bloodGroup} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const PieChart = ({ bloodGroupData }) => {
  const chartData = {
    labels: ["Total In", "Total Out", "Available"],
    datasets: [
      {
        data: [
          bloodGroupData.totalIn,
          bloodGroupData.totalOut,
          bloodGroupData.available,
        ],
        backgroundColor: ["#F0B86E", "#352F44", "#BB2525"],
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  //For this we install dependency react-chartjs-2 and import {Pie}here
  return (
    <div className="w-72 h-72 mx-auto">
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
}
export default DashboardOrg;