import { GigsActionTypes } from './gigs.types';

export const setUnassignedGigs = gigs => ({
  type: GigsActionTypes.SET_UNASSIGNED_GIGS,
  payload: gigs
});

export const setMyGigs = gigs => ({
  type: GigsActionTypes.SET_MY_GIGS,
  payload: gigs
});

export const setMyPostedGigs = gigs => ({
  type: GigsActionTypes.SET_MY_POSTED_GIGS,
  payload: gigs
});

export const clearMyGigs = gigs => ({
  type: GigsActionTypes.CLEAR_MY_GIGS,
  payload: gigs
});

export const togglePostedGigsHidden = () => ({
  type: GigsActionTypes.TOGGLE_POSTED_GIGS_HIDDEN
})