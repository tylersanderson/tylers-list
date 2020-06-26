import { GigsActionTypes } from './gigs.types';

export const setUnassignedGigs = gigs => ({
  type: GigsActionTypes.SET_UNASSIGNED_GIGS,
  payload: gigs
});


