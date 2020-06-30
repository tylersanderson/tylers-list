import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import RegisterPage from './pages/register/register.component';
import SignInPage from './pages/signin/signin.component';
import MyGigsPage from './pages/my-gigs/my-gigs.component';
import PostGigPage from './pages/post-gig/post-gig.component';

import Header from './components/header/header.component';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { setUnassignedGigs, setMyGigs } from './redux/gigs/gigs.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  async componentDidMount() {
    const token = window.sessionStorage.getItem('token');
    const { setCurrentUser } = this.props;
    const { setUnassignedGigs, setMyGigs } = this.props;

    const getMyGigs = () => {
      if (token) {
        fetch(`http://192.168.99.100:3000/gigs/false/${this.props.currentUser.id}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        })
        .then(resp => resp.json())
        .then(gigs => {
            if (gigs && gigs.gignumber) {
          setMyGigs(gigs);
            }
        })
      }
    }

    try { if (token) {
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
                console.log(this.props.currentUser.id);
                getMyGigs();
              }
            })
        }
      })
    }} catch (err) {
      console.log(err)
    }

    if (true) {
      fetch('http://192.168.99.100:3000/gigs/false/0', {
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
              this.props.currentUser.id ? (
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
              this.props.currentUser.id ? (
                <MyGigsPage />
              ) : (
                <Redirect to='/signin' />
              )
            }
          />
          <Route
            exact
            path='/postgig'
            render={() =>
              this.props.currentUser.id ? (
                <PostGigPage />
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
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setUnassignedGigs: gigs => dispatch(setUnassignedGigs(gigs)),
  setMyGigs: gigs => dispatch(setMyGigs(gigs))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);