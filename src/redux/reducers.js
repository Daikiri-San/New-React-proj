import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import stringsReducer from "./strings/stringsReducer";

const rootReducer = combineReducers({
  authAdmin: authReducer,
  strings: stringsReducer,
});

export default rootReducer;
