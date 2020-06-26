import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { setCurrentUser } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

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

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { history } = this.props;
    
    try {
      let signin = await fetch('http://192.168.99.100:3000/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      let data = await signin.json()
      console.log(data)
      // const saveToken = data => {
      if (data.userId && data.success === 'true') {
        this.saveAuthTokenInSession(data.token);
      };

      const token = window.sessionStorage.getItem('token');
      const {setCurrentUser } = this.props;

      if (token) {
        await fetch('http://192.168.99.100:3000/signin', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        })
        .then(resp => resp.json())
        .then(data => {
          if (data && data.id) {
            fetch(`http://192.168.99.100:3000/profile/${data.id}`, {
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
                }
              })
          }
        })
      }
        history.push('/');
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn));