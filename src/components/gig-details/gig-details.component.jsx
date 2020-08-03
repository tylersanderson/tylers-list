import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import noImage from '../card/noimage.jpg';

import CustomButton from '../custom-button/custom-button.component';

import { setCurrentUser } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setUnassignedGigs, setMyGigs, setMyPostedGigs } from '../../redux/gigs/gigs.actions';

import {
  GigDetailsContainer,
  GigCard,
  ModalClose,
  CardImage,
  CardPay,
  CardTitle,
  CardNotes,
  CardStreet,
  GigPoster,
  ButtonsContainer
} from './gig-details.styles';

class GigDetails extends React.Component {
  constructor(props) {
    super(props);
    this.handleTakeGigClick = this.handleTakeGigClick.bind(this);
    this.handleCompleteGigClick = this.handleCompleteGigClick.bind(this);
    this.handleSignInRedirect = this.handleSignInRedirect.bind(this);

    this.state = {
  
    };
  }

  handleTakeGigClick = async event => {
    const token = window.sessionStorage.getItem('token');
    const { gignumber } = this.props;
    const { setUnassignedGigs, setMyGigs } = this.props;
    const getMyPostedGigs = () => {
      const token = window.sessionStorage.getItem('token');
      const { setMyPostedGigs } = this.props;
      if (token) {
        fetch(`${process.env.REACT_APP_API_URL}/gigs/all/postedby/${this.props.currentUser.id}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        })
        .then(resp => resp.json())
        .then(gigs => {
            if (gigs[0].gignumber) {
              setMyPostedGigs(gigs);
            }
        })
      }
    }

    await fetch(`${process.env.REACT_APP_API_URL}/gigs/gigreassign/${gignumber}/${this.props.currentUser.id}`, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
    })

    if (token) {
      fetch(`${process.env.REACT_APP_API_URL}/gigsunassigned`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
      .then(resp => resp.json())
      .then(gigs => {
          if (true) {
            setUnassignedGigs(gigs);
          }
      })
    }

    if (token) {
      await fetch(`${process.env.REACT_APP_API_URL}/gigs/false/${this.props.currentUser.id}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
      .then(resp => resp.json())
      .then(gigs => {
          if (gigs[0].gignumber) {
            setMyGigs(gigs);
          }
      })
      getMyPostedGigs();
    }

    this.props.toggleGigModal();
  }

  handleCompleteGigClick = async event => {
    const token = window.sessionStorage.getItem('token');
    const { gignumber } = this.props;
    const { setMyGigs } = this.props;
    const getMyPostedGigs = () => {
      const token = window.sessionStorage.getItem('token');
      const { setMyPostedGigs } = this.props;
      if (token) {
        fetch(`${process.env.REACT_APP_API_URL}/gigs/all/postedby/${this.props.currentUser.id}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        })
        .then(resp => resp.json())
        .then(gigs => {
            if (gigs[0].gignumber) {
              setMyPostedGigs(gigs);
            }
        })
      }
    }

    await fetch(`${process.env.REACT_APP_API_URL}/gigs/gigcomplete/${gignumber}`, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
    })

    if (token) {
      fetch(`${process.env.REACT_APP_API_URL}/gigs/false/${this.props.currentUser.id}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
      .then(resp => resp.json())
      .then(gigs => {
          if (gigs[0].gignumber) {
            setMyGigs(gigs);
          }
          else {
            setMyGigs([])
          }
      })
      getMyPostedGigs()
    }
    this.props.toggleGigModal();
  }

  handleSignInRedirect = () => {
    this.props.toggleGigModal();
    this.props.history.push('/signin');
  }
 
  componentDidMount() {
    const token = window.sessionStorage.getItem('token');
    const { gigpostedby, gigassignedto } = this.props;
      if (true) {
        fetch(`${process.env.REACT_APP_API_URL}/profile/name/${gigpostedby}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        })
        .then(resp => resp.json())
          .then(gigposter => {
              if (gigposter.name) {
                this.setState({gigPosterName: gigposter.name})
              }
        })
      }

      if (true) {
        fetch(`${process.env.REACT_APP_API_URL}/profile/name/${gigassignedto}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        })
        .then(resp => resp.json())
          .then(gigtaker => {
              if (gigtaker.name) {
                this.setState({gigTakerName: gigtaker.name})
              }
        })
      }

   }

    render() {
      const gigImage = this.props.gigimage || noImage
      let gigModalButton;
      if (this.props.gigassignedto == 0  && this.props.currentUser.id > 0) {
        gigModalButton = <CustomButton onClick={this.handleTakeGigClick}>Take Gig</CustomButton>
      } else if (this.props.gigassignedto != 0 && this.props.isgigcomplete == true) {
        gigModalButton = <div>Gig Completed</div>
      } else if (this.props.gigassignedto != 0 && this.props.isgigcomplete == false && this.props.currentUser.id > 0) {
        gigModalButton = <CustomButton onClick={this.handleCompleteGigClick}>Complete Gig</CustomButton>
      } else {
        gigModalButton = <CustomButton onClick={this.handleSignInRedirect}>Sign In</CustomButton>
      }

      return (
        <GigDetailsContainer>
          <GigCard>
            <CardImage>
              <img className='image' alt='gigimage' src={`${gigImage}`} />
            </CardImage>
            <div>
              <CardTitle>{this.props.gigname}</CardTitle>
              <CardNotes>{this.props.gignotes}</CardNotes>
              <CardPay>${this.props.gigpay}</CardPay>
              <CardStreet>{this.props.street}
              <br></br>
              {this.props.city}, {this.props.stateabv} {this.props.zipcode}
              </CardStreet>
              <GigPoster>Gig Posted By: {this.state.gigPosterName}</GigPoster>
              { this.state.gigTakerName 
              ? <GigPoster>Gig Taken By: {this.state.gigTakerName}</GigPoster>
              : <GigPoster>Gig Not Taken Yet</GigPoster>
              }
              </div>
            <ButtonsContainer>
              {gigModalButton}
            </ButtonsContainer>
            <ModalClose onClick={this.props.toggleGigModal}>&times;</ModalClose>
          </GigCard>
        </GigDetailsContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setUnassignedGigs: gigs => dispatch(setUnassignedGigs(gigs)),
  setMyGigs: gigs => dispatch(setMyGigs(gigs)),
  setMyPostedGigs: gigs => dispatch(setMyPostedGigs(gigs))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(GigDetails));