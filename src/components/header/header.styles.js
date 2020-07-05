import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem); }
  80% {
    transform: translateX(1rem); }
  100% {
    opacity: 1;
    transform: translate(0); }
  `;

const moveInRight = keyframes`
    0% {
      opacity: 0;
      transform: translateX(10rem); }
    80% {
      transform: translateX(-1rem); }
    100% {
      opacity: 1;
      transform: translate(0); }
  `;

export const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  min-width: 350px;
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
  font-size: 20px;
  padding: 15px 15px;
  font-weight: 900;
  animation-name: ${moveInLeft};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  transition: transform .3s;
  &:hover {
    transform: translateY(-0.1rem) scale(1.03);
  }
`;

export const TylerContainer = styled(Link)`
  height: 100%;
  color: white;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    color: blue;
  }
`;

export const ListContainer = styled(Link)`
  height: 100%;
  color: blue;
  &:hover {
    text-decoration: none;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  animation-name: ${moveInRight};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  transition: transform .3s;
`;

export const OptionLink = styled(Link)`
  font-size: 15px;
  padding: 10px 15px;
  cursor: pointer;
  color: white;

  &:hover {
    transform: translateY(-0.1rem) scale(1.03);
    text-decoration: none;
    cursor: pointer;
    color: blue;

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;