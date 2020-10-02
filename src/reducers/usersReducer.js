import { RECEIVE_USERS, UPDATE_USER_ANSWERS } from "../actions/users";

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

    default:
      return state;
  }
}
