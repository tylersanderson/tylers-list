import React from 'react';

import CardList from '../../components/cardlist/cardlist.component'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
  MyGigsTakenContainer, 
  TitleContainer,
  MyGigsPostedTitleContainer,
  MyGigsTakenTitleContainer 
} from './my-gigs-taken.styles';

import { setMyGigs, togglePostedGigsHidden } from '../../redux/gigs/gigs.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectMyGigs } from '../../redux/gigs/gigs.selectors';

const MyGigsTaken = ({ myGigs, togglePostedGigsHidden}) => (
  <MyGigsTakenContainer>
    <TitleContainer>
      <MyGigsPostedTitleContainer onClick={togglePostedGigsHidden}> 
        Gigs I Have Posted
      </MyGigsPostedTitleContainer>
      <MyGigsTakenTitleContainer>
          Gigs I Have Taken
      </MyGigsTakenTitleContainer>
    </TitleContainer>
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
  setMyGigs: gigs => dispatch(setMyGigs(gigs)),
  togglePostedGigsHidden: () => dispatch(togglePostedGigsHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyGigsTaken);