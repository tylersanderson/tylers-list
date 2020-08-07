import React from 'react';

import CardList from '../../components/cardlist/cardlist.component';
import Searchbox from '../../components/searchbox/searchbox.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
  HomePageContainer,
  AvailableGigsTitle
} from './hopepage.styles';

import { setUnassignedGigs, setSearchAvailableGigs } from '../../redux/gigs/gigs.actions';
import { selectUnassignedGigs, selectSearchAvailableGigs, selectGigsIsPending } from '../../redux/gigs/gigs.selectors';

const HomePage = ({unassignedGigs, setSearchAvailableGigs, searchAvailableGigs, gigsIsPending}) => {
  
  const updateSearch = (e) => {
    setSearchAvailableGigs(e.target.value);
  }

  return (
    <HomePageContainer>
      <AvailableGigsTitle>Gigs Available</AvailableGigsTitle>
      <Searchbox searchChange={(e) => updateSearch(e)}/>
      <CardList
        gigsArray={unassignedGigs.filter(unassignedGigs => {
          return unassignedGigs.concat.toLowerCase().includes(searchAvailableGigs.toLowerCase());
        })}
      />
      <h2>
        { gigsIsPending ? 'Gigs are loading...' : ''}
      </h2>
    </HomePageContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  unassignedGigs: selectUnassignedGigs,
  searchAvailableGigs: selectSearchAvailableGigs,
  gigsIsPending: selectGigsIsPending
});

const mapDispatchToProps = dispatch => ({
  setUnassignedGigs: gigs => dispatch(setUnassignedGigs(gigs)),
  setSearchAvailableGigs: gigs => dispatch(setSearchAvailableGigs(gigs))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);