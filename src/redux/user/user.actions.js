import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const clearCurrentUser = () => ({
  type: UserActionTypes.CLEAR_CURRENT_USER
});
