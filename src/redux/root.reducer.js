import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// export the combined full object
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
