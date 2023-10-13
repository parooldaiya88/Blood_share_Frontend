export const initialState = {
  loading: false,
};

export const loadersReducer = (state, action) => {
  switch (action.type) {
    case "Set_Loading":
      return {
        ...state,
        loading: action.payload, // Update 'loading' property
      };

    default:
      return state; // Return the current state for unhandled actions
  }
};
