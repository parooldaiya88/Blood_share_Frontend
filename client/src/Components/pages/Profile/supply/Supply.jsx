import React, { useContext, useEffect, useState } from "react";
import SupplyForm from "./SupplyForm.jsx";
import { Button } from "antd";
import { DataContext } from "../../../../reducer/context.js";
import { GetSupply } from "../../../../apiCalls/supplyApi.js";
import { message } from "antd";
import moment from "moment";

//Supply is also shown in organization profile on frontend to see in and out data
const Supply = () => {
  const { open, setOpen, dispatchLoader } = useContext(DataContext);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getBloodSupply = async (page) => {
    try {
      dispatchLoader({ type: "Set_Loading", payload: true });
      //GetSupply is called here by passing page as an argument it's made in supplyApi.js
      const response = await GetSupply(page);
      dispatchLoader({ type: "Set_Loading", payload: false });
      if (response.success) {
        //message.success("");
        setData(response.data);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatchLoader({ type: "Set_Loading", payload: false });
      message.error(error.message);
    }
  };

  //it will update the state of page
  const nextButtonHandler = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  const previousButtonHandler = () => {
    const previousPage = page - 1;
    setPage(previousPage);
  };
  // useEffect function
  //whenever the page variable changes, the function inside useEffect will be executed.
  useEffect(() => {
    getBloodSupply(page);
  }, [page]);

  //! SupplyForm shows on organization profile
  return (
    <div>
      <div className='flex justify-end'>
        <Button type=''  className= "bg-white text-text-bg text-lg  border-red-500   rounded-lg   px-4  transform transition-transform hover:scale-110"  onClick={() => setOpen(true)}>
          Add Blood Supply
        </Button>
      </div>
      {open && <SupplyForm reload={getBloodSupply} />}
      <div className='overflow-x-auto flex  flex-shrink '>
        <table className='min-w-full divide-y divide-gray-200 mt-5 text-center'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-center text-md text-text-bg font-semibold  uppercase tracking-widest'>
                Supply Type
              </th>
              <th className='px-6 py-3 text-center text-md text-text-bg uppercase font-semibold tracking-widest'>
                Blood Group
              </th>
              <th className='px-6 py-3 text-center text-md text-text-bg uppercase font-semibold tracking-widest'>
                Quantity(ML)
              </th>
              <th className='px-6 py-3 text-center text-md text-text-bg uppercase font-semibold tracking-widest'>
                Email
              </th>
              <th className='px-6 py-3 text-center text-md  text-text-bg uppercase font-semibold tracking-widest'>
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
                  {item.email}
                </td>
                <td className='px-6 py-4 whitespace-nowrap cursor-pointer uppercase'>
                  {moment(item.createdAt).format("DD/MM/YYYY hh:mm A")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    <div className="mt-16 flex justify-between p-6">
      <Button type='' className=" bg-white text-text-bg text-lg  border-red-500   rounded-lg   px-4  transform transition-transform hover:scale-110" onClick={previousButtonHandler}>
        Previous
      </Button>
      <Button type='' className="bg-white text-text-bg text-lg  border-red-500 rounded-lg   transform transition-transform hover:scale-110" onClick={nextButtonHandler}>
        Next
      </Button>
      </div>
 
    </div>
  );
};
export default Supply;
