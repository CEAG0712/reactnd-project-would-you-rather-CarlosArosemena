import {
  RECEIVE_USERS,
  UPDATE_USER_ANSWERS,
  ADD_QUESTION_TO_USER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case UPDATE_USER_ANSWERS:
      const { authUser, id, answer } = action;
      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [id]: answer,
          },
        },
      };

    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat(action.id),
        },
      };

    default:
      return state;
  }
}
