import { GigsActionTypes } from './gigs.types';
import {concatUnassignedGigs, setMyGigs } from './gigs.utils';

const INITIAL_STATE = {
  unassignedGigs: [],
  myGigs: [],
  myPostedGigs: [],
  postedGigsHidden: true,
  searchAvailableGigs: '',
  gigsIsPending: false
};

const gigsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GigsActionTypes.SET_UNASSIGNED_GIGS:
      return {
        ...state,
        unassignedGigs: concatUnassignedGigs(action.payload),
        gigsIsPending: false
      };
    case GigsActionTypes.SET_MY_GIGS:
      return {
        ...state,
        myGigs: setMyGigs(action.payload)
      };
    case GigsActionTypes.SET_MY_POSTED_GIGS:
      return {
        ...state,
        myPostedGigs: action.payload
      };
    case GigsActionTypes.CLEAR_MY_GIGS:
      return {
        ...state,
        myGigs: [],
        myPostedGigs: []
      };
    case GigsActionTypes.TOGGLE_POSTED_GIGS_HIDDEN:
      return {
        ...state,
        postedGigsHidden: !state.postedGigsHidden
      };
    case GigsActionTypes.SET_SEARCH_AVAILABLE_GIGS:
      return {
        ...state,
        searchAvailableGigs: action.payload
      };
    case GigsActionTypes.TOGGLE_GIGS_IS_PENDING:
      return {
        ...state,
        gigsIsPending: !state.gigsIsPending
      };
    default:
      return state;
  }
};

export default gigsReducer;