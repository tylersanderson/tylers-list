import styled, { keyframes } from 'styled-components';

const moveInBottom = keyframes`
0% {
  opacity: 0;
  transform: translateY(.25rem); }
100% {
  opacity: 1;
  transform: translate(0); }
  `;

export const PostGigContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  animation-name: ${moveInBottom};
  animation-duration: .5s;
  animation-timing-function: ease-out;
  transition: transform .3s;
`;

export const PostGigTitle = styled.h2`
  margin: 10px 0;
`;