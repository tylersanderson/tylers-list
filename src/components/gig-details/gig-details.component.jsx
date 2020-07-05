import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { setCurrentUser } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setUnassignedGigs, setMyGigs } from '../../redux/gigs/gigs.actions';

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
  SignInTitle,
  ButtonsContainer
} from './gig-details.styles';

class GigDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
 
  componentDidMount() {
    const token = window.sessionStorage.getItem('token');
    const { gigpostedby } = this.props;
      if (true) {
        fetch(`http://192.168.99.100:3000/profile/name/${gigpostedby}`, {
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
   }

    render() {
      return (
        <GigDetailsContainer>
          <GigCard>
            <CardImage>
              <img className='image' alt='gigimage' src={`${this.props.gigimage}`} />
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
            </div>
            <ButtonsContainer>
              <CustomButton>Take Gig</CustomButton>
            </ButtonsContainer>
            <ModalClose onClick={this.props.toggleGigModal}>&times;</ModalClose>
          </GigCard>
        </GigDetailsContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  //currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setUnassignedGigs: gigs => dispatch(setUnassignedGigs(gigs)),
  setMyGigs: gigs => dispatch(setMyGigs(gigs))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(GigDetails));