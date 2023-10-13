// Define the initial state

export const usersInitialState = {
  currentUser: null,
  isUserRegistered: false,
  data: {},
};
export const usersReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };

    case "SET_ORGANIZATION":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          userType: "organization",
        },
      };
    case "SET_DONOR":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          userType: "donor",
        },
      };
    case "SET_HOSPITAL":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          userType: "hospital",
        },
      };
    case "SET_USER_REGISTERED":
      return {
        ...state,
        isUserRegistered: action.payload,
      };
    default:
      return state;
  }
};
