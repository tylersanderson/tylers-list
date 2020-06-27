import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { setCurrentUser } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { RegisterContainer, RegisterTitle } from './register.styles';

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

	saveAuthTokenInSession = (token) => {
		window.sessionStorage.setItem('token', token)
	}

  handleSubmit = async event => {
    event.preventDefault();
    const { history } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    const {setCurrentUser } = this.props;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    //signUpStart({ displayName, email, password });

    if (true) {
      fetch('http://192.168.99.100:3000/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: email,
          password: password,
          name: displayName
        })
      })
        .then(response => response.json())
        .then(data => {
          if (data.userId && data.success === 'true') {
            this.saveAuthTokenInSession(data.token);
                fetch(`http://192.168.99.100:3000/profile/${data.userId}`, {
                    method: 'get',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': data.token
                    }
                })
                .then(resp => resp.json())
                .then(user => {
                if (user && user.email) {
                  setCurrentUser(user);
                }
              })
            .catch(console.log)
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
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <RegisterContainer>
        <RegisterTitle>I do not have a account</RegisterTitle>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </RegisterContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Register));
