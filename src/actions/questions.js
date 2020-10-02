export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const UPDATE_ANSWER_TO_QUESTION = "UPDATE_ANSWER_TO_QUESTION";

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
