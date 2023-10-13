import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../reducer/context.js";
import { GetAllDonors } from "../../../../apiCalls/userApiCalls.js";
import { message } from "antd";
import moment from "moment";
 

//Donor is shown in organization profile in frontend
const Donors = () => {
  const { dispatchLoader } = useContext(DataContext);
  const [data, setData] = useState([]);

  const getBloodSupply = async () => {
    try {
      dispatchLoader({ type: "Set_Loading", payload: true });

      // getting all the donors by calling the function here!
      const response = await GetAllDonors();
      dispatchLoader({ type: "Set_Loading", payload: false });
      if (response.success) {
       // message.success(response.message);
        setData(response.data);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatchLoader({ type: "Set_Loading", payload: false });
      message.error(error.message);
    }
  };

  // useEffect function to call the function written above
  useEffect(() => {
    getBloodSupply();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 mt-5 text-center">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-center text-md text-text-bg font-semibold uppercase tracking-widest">
              Name
            </th>
            <th className="px-6 py-3 text-center text-md text-text-bg uppercase font-semibold tracking-widest">
              Email
            </th>
            <th className="px-6 py-3 text-center text-md text-text-bg uppercase font-semibold tracking-widest">
              Phone
            </th>
            <th className="px-6 py-3 text-center text-md text-text-bg uppercase font-semibold tracking-widest">
              Date & Time
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Map over your data and generate table rows */}
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap cursor-pointer uppercase">
                {item.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap cursor-pointer uppercase">
                {item.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap cursor-pointer ">
                {item.phone}
              </td>
              <td className="px-6 py-4 whitespace-nowrap cursor-pointer uppercase">
                {moment(item.createdAt).format("DD/MM/YYYY hh:mm A")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Donors;
