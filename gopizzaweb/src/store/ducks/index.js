import { combineReducers } from "redux";

// import login from './login';
import { reducer as login } from "./login";
import { reducer as orders } from "./orders";

export default combineReducers({
  login,
  orders
});
