import React from 'react';

import CardList from '../../components/cardlist/cardlist.component'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { MyGigsContainer } from './mygigs.styles';

import { setMyGigs } from '../../redux/gigs/gigs.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectMyGigs } from '../../redux/gigs/gigs.selectors';

const MyGigsPage = ({myGigs}) => (
  <MyGigsContainer>
    <CardList
      gigsArray={myGigs}
    />
  </MyGigsContainer>
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
)(MyGigsPage);