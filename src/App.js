import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import RegisterPage from './pages/register/register.component';
import SignInPage from './pages/signin/signin.component';
import MyGigsPage from './pages/mygigs/mygigs.component';

import Header from './components/header/header.component';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const token = window.sessionStorage.getItem('token');
    const {setCurrentUser } = this.props;

    if (token) {
      fetch('http://192.168.99.100:3000/signin', {
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
                console.log(this.props.currentUser)
              }
            })
        }
      })
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined,
      age: data.age,
      occupation: data.occupation
    }})
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/register' component={RegisterPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInPage />
              )
            }
          />
          <Route
            exact
            path='/mygigs'
            render={() =>
              this.props.currentUser ? (
                <MyGigsPage />
              ) : (
                <Redirect to='/signin' />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);