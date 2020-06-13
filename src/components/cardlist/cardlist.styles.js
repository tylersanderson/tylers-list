import styled, { keyframes } from 'styled-components';

const moveInBottom = keyframes`
0% {
  opacity: 0;
  transform: translateY(1rem); }
100% {
  opacity: 1;
  transform: translate(0); }
  `;

export const CardlistContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  padding: 20px;
  animation-name: ${moveInBottom};
  animation-duration: .5s;
  animation-timing-function: ease-out;
  transition: transform .3s;

`;
