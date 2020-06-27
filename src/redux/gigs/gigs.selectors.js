import { createSelector } from 'reselect';

const selectGigs = state => state.gigs;

export const selectUnassignedGigs = createSelector(
  [selectGigs],
  gigs => gigs.unassignedGigs
);

export const selectMyGigs = createSelector(
  [selectGigs],
  gigs => gigs.myGigs
);