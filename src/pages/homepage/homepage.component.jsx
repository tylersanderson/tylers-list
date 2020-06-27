import React from 'react';

import CardList from '../../components/cardlist/cardlist.component'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { HomePageContainer } from './hopepage.styles';

import { setUnassignedGigs } from '../../redux/gigs/gigs.actions';
import { selectUnassignedGigs } from '../../redux/gigs/gigs.selectors';

const HomePage = ({unassignedGigs}) => (
  <HomePageContainer>
    <CardList
      gigsArray={unassignedGigs}
    />
  </HomePageContainer>
);


const mapStateToProps = createStructuredSelector({
  unassignedGigs: selectUnassignedGigs
});

const mapDispatchToProps = dispatch => ({
  setUnassignedGigs: gigs => dispatch(setUnassignedGigs(gigs))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);