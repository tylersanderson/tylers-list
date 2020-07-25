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

export const selectMyPostedGigs = createSelector(
  [selectGigs],
  gigs => gigs.myPostedGigs
);

export const selectPostedGigsHidden = createSelector(
  [selectGigs],
  gigs => gigs.postedGigsHidden
);

export const selectSearchAvailableGigs = createSelector(
  [selectGigs],
  gigs => gigs.searchAvailableGigs
);