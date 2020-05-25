import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  TitleContainer,
  TylerContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({  }) => (
  <HeaderContainer>
    <TitleContainer to='/'>
      <TylerContainer>TYLER'S</TylerContainer>
      <span>LIST</span>
    </TitleContainer>
    <OptionsContainer>
      <OptionLink to='/signin'>SIGN IN</OptionLink>
      <OptionLink to='/register'>REGISTER</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
 
);

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
