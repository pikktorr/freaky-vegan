import { userActionTypes } from "./user.types";

// DEFAULT STATE ON USER
const INITIAL_STATE = {
  currentUser: null,
};

// FUNCTION WITH DATA AND ACTION
const userReducer = (currentState = INITIAL_STATE, action) => {
  // if action type is...
  switch (action.type) {
    // ...this value, then...
    case userActionTypes.SET_CURRENT_USER:
      // ...return the whole old state with all the new changes on state
      return {
        // passing in the current old state
        ...currentState,
        // adding new value on user in the state
        currentUser: action.payload,
      };

    // if action.type is not matched...
    default:
      // return the old state
      return currentState;
  }
};

export default userReducer;
