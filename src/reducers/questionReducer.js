import {
  RECEIVE_QUESTIONS,
  UPDATE_ANSWER_TO_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case UPDATE_ANSWER_TO_QUESTION:
      const { authUser, id, answer } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          [answer]: {
            ...state[id][answer],
            votes: state[id][answer].votes.concat(authUser),
          },
        },
      };
    default:
      return state;
  }
}
