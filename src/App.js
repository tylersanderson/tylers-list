import React, { Suspense } from 'react';
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
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { setUnassignedGigs, setMyGigs, setMyPostedGigs } from './redux/gigs/gigs.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  async componentDidMount() {
    const token = window.sessionStorage.getItem('token');
    const { setCurrentUser } = this.props;
    const { setUnassignedGigs } = this.props;

    const getMyGigs = () => {
      const token = window.sessionStorage.getItem('token');
      const { setMyGigs } = this.props;
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
        })
      }
    }

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


    try { if (token) {
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
                getMyGigs();
                getMyPostedGigs()
              }
            })
        }
      })
    }} catch (err) {
      console.log(err)
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
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
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
            </Suspense>
          </ErrorBoundary>
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
  setMyGigs: gigs => dispatch(setMyGigs(gigs)),
  setMyPostedGigs: gigs => dispatch(setMyPostedGigs(gigs))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);