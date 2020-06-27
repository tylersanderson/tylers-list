import React from 'react';

import CardList from '../../components/cardlist/cardlist.component'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { MyGigsContainer } from './mygigs.styles';

import { setMyGigs } from '../../redux/gigs/gigs.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectMyGigs } from '../../redux/gigs/gigs.selectors';

//const token = window.sessionStorage.getItem('token');


  // if (token) {
  //   fetch(`http://192.168.99.100:3000/gigs/false/${this.props.currentUser.id}`, {
  //     method: 'get',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': token
  //     }
  //   })
  //   .then(resp => resp.json())
  //   .then(gigs => {
  //       if (true) {
  //     setMyGigs(myGigs);
  //       }
  //   })
  // }

const MyGigsPage = ({myGigs}) => (
  <MyGigsContainer>
    <CardList
      gigsArray={myGigs}
    />
  </MyGigsContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  myGigs: selectMyGigs
});

const mapDispatchToProps = dispatch => ({
  setMyGigs: gigs => dispatch(setMyGigs(gigs))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyGigsPage);