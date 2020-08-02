import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { setCurrentUser } from '../../redux/user/user.actions';
import { setUnassignedGigs, setMyGigs, setMyPostedGigs } from '../../redux/gigs/gigs.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  saveAuthTokenInSession = (token) => {
    window.sessionStorage.setItem('token', token)
  }

  getMyGigs = (userId) => {
    const token = window.sessionStorage.getItem('token');
    const { setMyGigs } = this.props;
    if (token) {
      fetch(`${process.env.REACT_APP_API_URL}/gigs/false/${userId}`, {
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
    }
  }

  getMyPostedGigs = (userId) => {
    const token = window.sessionStorage.getItem('token');
    const { setMyPostedGigs } = this.props;
    if (token) {
      fetch(`${process.env.REACT_APP_API_URL}/gigs/all/postedby/${userId}`, {
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

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    
    try {
      let signin = await fetch(`${process.env.REACT_APP_API_URL}/signin`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      let data = await signin.json()
      console.log(data);
      if (data.userId && data.success === 'true') {
        this.saveAuthTokenInSession(data.token);
      };

      const token = window.sessionStorage.getItem('token');
      const { setCurrentUser } = this.props;
      const { setUnassignedGigs } = this.props;

      if (token) {
        await fetch(`${process.env.REACT_APP_API_URL}/signin`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        })
        .then(resp => resp.json())
        .then(data => {
          if (data && data.id) {
            fetch(`${process.env.REACT_APP_API_URL}/profile/${data.id}`, {
              method: 'get',
              headers: {
              'Content-Type': 'application/json',
              'Authorization': token
              }
            })
              .then(resp => resp.json())
              .then(user => {
                if (user && user.email) {
                  setCurrentUser(user);
                  this.getMyGigs(user.id);
                  this.getMyPostedGigs(user.id);
                }
              })
          }
        })
      }

      if (true) {
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
    } catch (err) {
      console.log(err);
    };
  }


  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

    render() {
      return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setUnassignedGigs: gigs => dispatch(setUnassignedGigs(gigs)),
  setMyGigs: gigs => dispatch(setMyGigs(gigs)),
  setMyPostedGigs: gigs => dispatch(setMyPostedGigs(gigs))
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(SignIn));