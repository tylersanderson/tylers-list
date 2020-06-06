import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
//import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  TitleContainer,
  TylerContainer,
  ListContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({ currentUser }) => (
  <HeaderContainer>
    <TitleContainer>
      <TylerContainer to='/'>TYLER'S</TylerContainer>
      <ListContainer to='/'>LIST</ListContainer>
    </TitleContainer>
    {currentUser ? (
      <OptionsContainer>
        <OptionLink to='/mygigs'>MY GIGS</OptionLink>,
        <OptionLink as='div' >
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

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
