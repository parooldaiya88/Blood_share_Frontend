import { createContext, useReducer, useState } from "react";
import { loadersReducer, initialState } from "./loadersReducer.js";
import { usersReducer, usersInitialState } from "./usersReducer.js";

export const DataContext = createContext();

const ContextProvider = ({ children }) => {
  const [loaderState, dispatchLoader] = useReducer(
    loadersReducer,
    initialState
  );
  const [isOpen, setIsOpen] = useState(false);
  const [userState, dispatchUser] = useReducer(usersReducer, usersInitialState);
  const [open, setOpen] = useState(false);
  const [supplyType, setSupplyType] = useState("in");
  const [type, setType] = useState("donor");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
   const [formData, setFormData] = useState({
    userType: type,
    name: "",
    email: "",
    password: "",
    phone: "",
    hospitalName: "",
    organizationName: "",
    address: "",
  });
  const [appointment, setAppointment] = useState({
   
    name: "",
    date:"",
    time:"",
    phone: "",
  });
  const [bloodGroups, setBloodGroups] = useState([]);

  //const { isUserRegistered, currentUser } = userState;
  return (
    <DataContext.Provider
      value={{
        loaderState,
        dispatchLoader,
        userState,
        dispatchUser,
        open,
        setOpen,
        supplyType,
        setSupplyType,
        loginData,
        setLoginData,
        type,
        setType,
        formData,
        setFormData,
        bloodGroups,
        setBloodGroups,
        appointment,
        setAppointment,
        setIsOpen,
        isOpen
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
