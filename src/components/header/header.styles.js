import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const TitleContainer = styled.div`
  height: 60px;
  color: blue;
  font-size: 30px;
  padding: 10px 15px;
  font-weight: 900;
  
`;

export const TylerContainer = styled(Link)`
  height: 100%;
  color: white;
  &:hover {
    cursor: pointer;
    color: blue;
`;

export const ListContainer = styled(Link)`
  height: 100%;
  color: blue;
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

  &:hover {
    cursor: pointer;
    color: blue;

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;
