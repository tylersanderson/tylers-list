import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import RegisterPage from './pages/register/register.component';
import SignInPage from './pages/signin/signin.component';

import Header from './components/header/header.component';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

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
        </Switch>
      </div>
    );
  }
}

export default App
