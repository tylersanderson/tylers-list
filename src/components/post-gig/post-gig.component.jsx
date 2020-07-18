import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import FormTextarea from '../form-textarea/form-textarea.component';
import CustomButton from '../custom-button/custom-button.component';

import { setCurrentUser } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setUnassignedGigs } from '../../redux/gigs/gigs.actions';

import { PostGigContainer, PostGigTitle } from './post-gig.styles';

class PostGig extends React.Component {
  constructor() {
    super();

    this.state = {
      gigname: '',
      gigpay: '',
      street: '',
      city: '',
      stateabv: '',
      zipcode: '',
      gignotes: '',
      gigimage: ''
    };
  }

	saveAuthTokenInSession = (token) => {
		window.sessionStorage.setItem('token', token)
	}

  handleSubmit = async event => {
    event.preventDefault();
    const { history } = this.props;
    const { gigname, gigpay, street, city, stateabv, zipcode, gignotes, gigimage } = this.state;
    const token = window.sessionStorage.getItem('token');
    const { setUnassignedGigs } = this.props;

    if (token) {
      await fetch('http://192.168.99.100:3000/gigs', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({
          gigname: gigname,
          gigpay: gigpay,
          street: street,
          city: city,
          stateabv: stateabv,
          zipcode: zipcode,
          gignotes: gignotes,
          gigimage: gigimage,
          gigpostedby: this.props.currentUser.id
        })
      })
    }

    if (true) {
      fetch('http://192.168.99.100:3000/gigsunassigned', {
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
      history.push('/');
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { gigname, gigpay, street, city, stateabv, zipcode, gignotes, gigimage } = this.state;
    return (
      <PostGigContainer>
        <PostGigTitle>Post a New Gig</PostGigTitle>
        <span>Please complete the information below:</span>
        <form className='post-gig-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='gigname'
            value={gigname}
            onChange={this.handleChange}
            label='Gig Name'
            maxLength='40'
            required
          />
          <FormInput
            type='number'
            name='gigpay'
            value={gigpay}
            onChange={this.handleChange}
            label='Gig Payment'
            required
          />
          <FormInput
            type='text'
            name='street'
            value={street}
            onChange={this.handleChange}
            label='Street'
            maxLength='26'
            required
          />
          <FormInput
            type='text'
            name='city'
            value={city}
            onChange={this.handleChange}
            label='City'
            maxLength='18'
            required
          />
          <FormInput
            type='text'
            name='stateabv'
            value={stateabv}
            onChange={this.handleChange}
            label='State'
            maxLength='2'
            required
          />
          <FormInput
            type='number'
            name='zipcode'
            value={zipcode}
            onChange={this.handleChange}
            label='Zip Code'
            max={99999}
            required
          />

          <FormTextarea
            name='gignotes'
            value={gignotes}
            onChange={this.handleChange}
            label='Gig Description'
            maxLength='200'
            rows={6}
            required 
          />
          <FormInput
            type='url'
            name='gigimage'
            value={gigimage}
            onChange={this.handleChange}
            label='Gig Image URL'
            maxLength='200'
          />
    
          <CustomButton type='submit'>Post Gig</CustomButton>
        </form>
      </PostGigContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setUnassignedGigs: gigs => dispatch(setUnassignedGigs(gigs)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostGig));