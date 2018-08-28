import { combineReducers } from "redux";

import { user, userError } from "./userReducers";
import { post } from "./postReducers";

export default combineReducers({
  user,
  userError,
  post
});
