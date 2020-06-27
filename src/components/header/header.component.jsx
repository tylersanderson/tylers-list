import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { clearCurrentUser } from '../../redux/user/user.actions';
//import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  TitleContainer,
  TylerContainer,
  ListContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({ currentUser, clearCurrentUser }) => (
  <HeaderContainer>
    <TitleContainer>
      <TylerContainer to='/'>TYLER'S</TylerContainer>
      <ListContainer to='/'>LIST</ListContainer>
    </TitleContainer>
    {currentUser.id ? (
      <OptionsContainer>
        <OptionLink to='/mygigs'>MY GIGS</OptionLink>,
        <OptionLink as='div' onClick={clearCurrentUser}>
            SIGN OUT
        </OptionLink>
      </OptionsContainer>
    ) : (
      <OptionsContainer>
        <OptionLink to='/mygigs'>MY GIGS</OptionLink>
        <OptionLink to='/signin'>SIGN IN</OptionLink>
        <OptionLink to='/register'>REGISTER</OptionLink>
      </OptionsContainer>
      )}
  </HeaderContainer>
 
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  clearCurrentUser: user => dispatch(clearCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
