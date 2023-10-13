import React, { useContext, useEffect, useState } from "react";

import { DataContext } from "../../../../reducer/context.js";
import { DonationOfBloodSupply } from "../../../../apiCalls/supplyApi.js";
import { message } from "antd";
import moment from "moment";


//SupplyTable is called in Profile.jsx with condition [currentUser.userType === "hospital"]
// This has been shown in Hospital profile in frontend
const DonationTable = ({userType}) => {
  const { open, setOpen, dispatchLoader } = useContext(DataContext);
  const [data, setData] = useState([]);

  const getBloodSupply = async () => {
    try {
      dispatchLoader({ type: "Set_Loading", payload: true });
      const response = await DonationOfBloodSupply();
      dispatchLoader({ type: "Set_Loading", payload: false });
      if (response.success) {
        message.success(response.message);
        setData(response.data);
        console.log(response.data);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatchLoader({ type: "Set_Loading", payload: false });
      message.error(error.message);
    }
  };

  // useEffect function
  useEffect(() => {
    getBloodSupply();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200 mt-5 text-center'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-center text-md text-text-bg font-semibold  uppercase tracking-wider'>
                Supply Type
              </th>
              <th className='text-text-bg px-6 py-3 text-center text-md font-semibold tracking-wider'>
                Blood Group
              </th>
              <th className='px-6 py-3 text-center text-md text-text-bg uppercase font-semibold tracking-wider'>
                Quantity(ML)
              </th>
              <th className='px-6 py-3 text-center text-md text-text-bg uppercase font-semibold tracking-wider'>
                organization Name
              </th>
              <th className='px-6 py-3 text-center text-md uppercase text-text-bg font-semibold tracking-wider'>
                Date & Time
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {/* Map over your data and generate table rows */}
            {data.map((item) => (
              <tr key={item.id}>
                <td className='px-6 py-4 whitespace-nowrap cursor-pointer uppercase'>
                  {item.supplyType}
                </td>
                <td className='px-6 py-4 whitespace-nowrap cursor-pointer uppercase'>
                  {item.bloodGroup}
                </td>
                <td className='px-6 py-4 whitespace-nowrap cursor-pointer uppercase'>
                  {item.quantity}
                </td>
                <td className='px-6 py-4 whitespace-nowrap cursor-pointer '>
                  {item.organization.organizationName}
                </td>
                <td className='px-6 py-4 whitespace-nowrap cursor-pointer uppercase'>
                  {moment(item.createdAt).format("DD/MM/YYYY hh:mm A")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationTable;
