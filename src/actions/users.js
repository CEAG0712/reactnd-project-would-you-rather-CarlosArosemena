import { updateAnswerToQuestion } from "../actions/questions";
import { saveQuestionAnswer } from "../utils/api";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USER_ANSWERS = "UPDATE_USER_ANSWERS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export const updateUserAnswers = (authUser, id, answer) => {
  return {
    type: UPDATE_USER_ANSWERS,
    authUser,
    id,
    answer,
  };
};

export const saveAnswerToQuestion = (authUser, id, answer) => {
  return (dispatch) => {
    dispatch(updateUserAnswers(authUser, id, answer));
    dispatch(updateAnswerToQuestion(authUser, id, answer));

    return saveQuestionAnswer(authUser, id, answer).catch((e) => {
      console.error("Unable to persist question: ", e);
    });
  };
};
