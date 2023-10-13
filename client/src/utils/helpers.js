export const getLoggedInUserName = (user) => {
  if (user.userType === "donor") {
    return user.name;
  } else if (user.userType === "hospital") {
    return user.hospitalName;
  } else if (user.userType === "organization") {
    return user.organizationName;
  }
};

//supplyInputValidation is called in SupplyForm
export const supplyInputValidation = ()=>{
  return [
    {
      required: true,
      message: "Required",
    },
  ]
}