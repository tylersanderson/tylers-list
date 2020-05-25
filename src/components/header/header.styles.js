import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  background-color: black;
`;

export const TitleContainer = styled(Link)`
  height: 60px;
  padding: 1px;
  color: blue;
  font-size: 30px;
  padding: 13px 15px;
  font-weight: 900;
`;

export const TylerContainer = styled(Link)`
  height: 100%;
  color: white;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: white;
`;
