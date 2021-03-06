import React from 'react';

import CardList from '../../components/cardlist/cardlist.component'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
  MyGigsPostedContainer, 
  TitleContainer,
  MyGigsPostedTitleContainer,
  MyGigsTakenTitleContainer,
  NoGigsContainer
} from './my-gigs-posted.styles';

import { setMyGigs, togglePostedGigsHidden } from '../../redux/gigs/gigs.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectMyPostedGigs } from '../../redux/gigs/gigs.selectors';

function compare(a, b) {
  const gigNumberA = a.gignumber;
  const gigNumberB = b.gignumber;

  let comparison = 0;
  if (gigNumberB > gigNumberA ) {
    comparison = 1;
  } else if (gigNumberB < gigNumberA) {
    comparison = -1;
  }
  return comparison
}

const MyGigsPosted = ({ myPostedGigs, togglePostedGigsHidden }) => (
  <MyGigsPostedContainer>
    <TitleContainer>
      <MyGigsTakenTitleContainer 
        onClick={togglePostedGigsHidden}> 
        Gigs I Have Taken
      </MyGigsTakenTitleContainer>
      <MyGigsPostedTitleContainer>
          Gigs I Have Posted
      </MyGigsPostedTitleContainer>
      
    </TitleContainer>
    { 
      myPostedGigs.length
      ? <CardList
          gigsArray={myPostedGigs.sort(compare)}
        />
      : <NoGigsContainer>You have not posted any gigs</NoGigsContainer>
    }
  </MyGigsPostedContainer>
);

const mapStateToProps = createStructuredSelector({
  myPostedGigs: selectMyPostedGigs,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setMyGigs: gigs => dispatch(setMyGigs(gigs)),
  togglePostedGigsHidden: () => dispatch(togglePostedGigsHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyGigsPosted);