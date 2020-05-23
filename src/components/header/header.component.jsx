import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({  }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <div>TYLER'S LIST</div>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/signin'>SIGN IN</OptionLink>
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
