import { useContext } from "react";
import Donors from "./supply/Donors.jsx";
import Hospitals from "./supply/Hospitals.jsx";
import { Tabs, Button } from "antd";
import Supply from "./supply/Supply.jsx";
import { DataContext } from "../../../reducer/context.js";
import Organizations from "./Organizations.jsx";
import UtilizationTable from "./supply/UtilizationTable.jsx";
import DonationTable from "./supply/DonationTable.jsx";
import DashboardOrg from "./supply/DashboardOrg.jsx";
import Appointment from "../../Appointment.jsx";

const Profile = () => {
  const { userState } = useContext(DataContext);
  const { currentUser } = userState;
  return (
    <div>
      <Tabs>
        {currentUser?.userType === "organization" && (
          <>
            <Tabs.TabPane tab='Home' key='1'>
              <DashboardOrg />
            </Tabs.TabPane>
            <Tabs.TabPane  tab='Supply' key='2'  >
              <Supply />
            </Tabs.TabPane>
            <Tabs.TabPane tab='Donors' key='3'>
              <Donors />
            </Tabs.TabPane>
            <Tabs.TabPane tab='Hospital' key='4'>
              <Hospitals />
            </Tabs.TabPane>
          </>
        )}
        {currentUser.userType === "donor" && (
          <>
        <Tabs.TabPane tab='BloodDonation' key='5'>
          <DonationTable />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Organizations' key='6'>
          <Organizations userType='donor' />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Book Appointment' key='7'>
          <Appointment userType='donor' />
        </Tabs.TabPane>
        </>
        )}



        {currentUser.userType === "hospital" && (
          <>
            <Tabs.TabPane tab='Utilization' key='8'>
              <UtilizationTable />
            </Tabs.TabPane>
            <Tabs.TabPane tab='Organizations' key='9'>
              <Organizations userType='hospital' />
            </Tabs.TabPane>
          </>
        )}
      </Tabs>
    </div>
  );
};
export default Profile;
