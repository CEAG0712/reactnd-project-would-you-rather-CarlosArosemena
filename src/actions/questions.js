import { saveQuestion } from "../utils/api";
import { addQuestionToUserAction } from "../actions/users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const UPDATE_ANSWER_TO_QUESTION = "UPDATE_ANSWER_TO_QUESTION";
export const CREATE_NEW_QUESTION = "CREATE_NEW_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export const updateAnswerToQuestion = (authUser, id, answer) => {
  return {
    type: UPDATE_ANSWER_TO_QUESTION,
    authUser,
    id,
    answer,
  };
};

const creatNewQuestion = (question) => {
  return {
    type: CREATE_NEW_QUESTION,
    question,
  };
};

export const saveNewQuestion = (optionOneText, optionTwoText, author) => {
  return (dispatch) => {
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
      (question) => {
        dispatch(creatNewQuestion(question));
        dispatch(addQuestionToUserAction(question));
      }
    );
  };
};
