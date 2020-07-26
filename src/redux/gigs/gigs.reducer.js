import { GigsActionTypes } from './gigs.types';
import {concatUnassignedGigs, setMyGigs } from './gigs.utils';

const INITIAL_STATE = {
  unassignedGigs: [],
  myGigs: [],
  myPostedGigs: [],
  postedGigsHidden: true,
  searchAvailableGigs: ''
};

const gigsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GigsActionTypes.SET_UNASSIGNED_GIGS:
      return {
        ...state,
        unassignedGigs: concatUnassignedGigs(action.payload)
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
        myGigs: []
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
    default:
      return state;
  }
};

export default gigsReducer;