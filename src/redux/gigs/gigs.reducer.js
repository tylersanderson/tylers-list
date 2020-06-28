import { GigsActionTypes } from './gigs.types';

const INITIAL_STATE = {
  unassignedGigs: [],
  myGigs: []
};

const gigsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GigsActionTypes.SET_UNASSIGNED_GIGS:
      return {
        ...state,
        unassignedGigs: action.payload
      };
    case GigsActionTypes.SET_MY_GIGS:
      return {
        ...state,
        myGigs: action.payload
      };
    case GigsActionTypes.CLEAR_MY_GIGS:
      return {
        ...state,
        myGigs: []
      };
    default:
      return state;
  }
};

export default gigsReducer;