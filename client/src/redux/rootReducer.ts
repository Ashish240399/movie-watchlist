import { combineReducers } from "redux";
import userSlice from "./slices/userSlice";
import alertbarSclice from "./slices/alertbarSclice";
import modalSlice from "./slices/modalSlice";
import loaderSlice from "./slices/loaderSlice";
import usersDataSlice from "./slices/usersDataSlice";

const rootReducer = combineReducers({
  user: userSlice,
  alert: alertbarSclice,
  modal: modalSlice,
  loader: loaderSlice,
  userData: usersDataSlice,
});

export default rootReducer;
