import { combineReducers } from "redux";
import authUser from "../reducers/authUserReducer";
import questions from "../reducers/questionReducer";
import users from "../reducers/usersReducer";

export default combineReducers({
  authUser,
  questions,
  users,
});
