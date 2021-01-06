import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

// export the combined full object
export default combineReducers({
  user: userReducer,
});


