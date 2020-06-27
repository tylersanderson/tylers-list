import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: []
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case UserActionTypes.CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUser: [],
        headers: {
          'Content-Type': 'application/json',
          'Authorization': window.sessionStorage.clear()
        }
      };
    default:
      return state;
  }
};

export default userReducer;