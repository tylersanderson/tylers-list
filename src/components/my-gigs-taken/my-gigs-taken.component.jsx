import React from 'react';

import CardList from '../../components/cardlist/cardlist.component'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { MyGigsTakenContainer } from './my-gigs-taken.styles';

import { setMyGigs } from '../../redux/gigs/gigs.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectMyGigs } from '../../redux/gigs/gigs.selectors';

const MyGigsTaken = ({myGigs}) => (
  <MyGigsTakenContainer>
    { 
      myGigs.length
      ? <CardList
          gigsArray={myGigs}
        />
      : <div>You have no gigs</div>
    }
  </MyGigsTakenContainer>
);

const mapStateToProps = createStructuredSelector({
  myGigs: selectMyGigs,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setMyGigs: gigs => dispatch(setMyGigs(gigs))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyGigsTaken);