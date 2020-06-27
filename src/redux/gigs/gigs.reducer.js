import { GigsActionTypes } from './gigs.types';

const INITIAL_STATE = {
  unassignedGigs: []
};

const gigsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GigsActionTypes.SET_UNASSIGNED_GIGS:
      return {
        ...state,
        unassignedGigs: action.payload
      };
    default:
      return state;
  }
};

export default gigsReducer;