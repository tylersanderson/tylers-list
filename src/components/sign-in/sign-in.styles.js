import styled, { keyframes } from 'styled-components';

const moveInBottom = keyframes`
0% {
  opacity: 0;
  transform: translateY(.25rem); }
100% {
  opacity: 1;
  transform: translate(0); }
  `;

export const SignInContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  animation-name: ${moveInBottom};
  animation-duration: .5s;
  animation-timing-function: ease-out;
  transition: transform .3s;
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
