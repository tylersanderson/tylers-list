import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MyGigsTaken from '../../components/my-gigs-taken/my-gigs-taken.component.jsx';
import MyGigsPosted from '../../components/my-gigs-posted/my-gigs-posted.component.jsx';

import { MyGigsContainer } from './my-gigs.styles';

import { setMyGigs, togglePostedGigsHidden } from '../../redux/gigs/gigs.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectMyGigs, selectPostedGigsHidden } from '../../redux/gigs/gigs.selectors';

const MyGigsPage = ({postedGigsHidden}) => (
  <MyGigsContainer>
    { postedGigsHidden 
      ? <MyGigsTaken/>
      : <MyGigsPosted/>
    }
  </MyGigsContainer>
);

const mapStateToProps = createStructuredSelector({
  myGigs: selectMyGigs,
  currentUser: selectCurrentUser,
  postedGigsHidden: selectPostedGigsHidden
});

const mapDispatchToProps = dispatch => ({
  setMyGigs: gigs => dispatch(setMyGigs(gigs)),
  togglePostedGigsHidden: gigs => dispatch(togglePostedGigsHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyGigsPage);