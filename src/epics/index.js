import { combineEpics } from "redux-observable";

import { fetchUserEpic } from "./userEpics";
import { fetchPostEpic } from "./postEpics";

export default combineEpics(fetchUserEpic, fetchPostEpic);
