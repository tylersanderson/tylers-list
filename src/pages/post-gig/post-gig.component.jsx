import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { PostGigContainer } from './post-gig.styles';

import { setMyGigs } from '../../redux/gigs/gigs.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const PostGigPage = () => (
  <PostGigContainer>
    Post Gig Page
  </PostGigContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setMyGigs: gigs => dispatch(setMyGigs(gigs))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostGigPage);