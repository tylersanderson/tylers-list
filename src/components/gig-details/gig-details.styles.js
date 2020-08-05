import styled, { keyframes } from 'styled-components';

const moveInBottom = keyframes`
0% {
  opacity: 0;
  transform: translateY(.25rem); }
100% {
  opacity: 1;
  transform: translate(0); }
  `;

export const GigDetailsContainer = styled.div`
  background-color: rgba(255,255,255,0.9);
	position: fixed;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
  display: flex;
  flex-direction: column;
	align-items: center;
  justify-content: center;
  animation-name: ${moveInBottom};
  animation-duration: .5s;
  animation-timing-function: ease-out;
  transition: transform .3s;
`;

export const GigCard = styled.div`
  background-color: rgba(255,255,255,1);
	width: auto;
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  position: relative;
  border-radius: .25rem;
  border-style: groove;
  margin: 5px;
`;

export const ModalClose = styled.div`
  font-size: 3rem;
  font-style: bold;
  position: absolute;
  top: -20px;
  right: 5px;
  cursor: pointer;
  &:hover {
    color: grey;
	  cursor: pointer;
  }
`
export const CardImage = styled.div`
  margin-top: 25px;
  margin-left: 25px;
  margin-right: 25px;

  .image {
    max-width: 70vw;
    max-height: 25vh;
  }

`;

export const CardTitle = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  padding: 20px 0px 10px 10px;
`;

export const CardNotes = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  text-align: center;
  font-weight: 100;
  padding: 0px 10px 10px 10px;
`;

export const CardPay = styled.div`
  font-size: 15px;
  font-weight: 900;
  color: green;
  text-align: center;
`
export const CardStreet = styled.div`
  font-size: 15px;
  text-align: center;
  padding: 10px 1px;
`

export const GigPoster = styled.div`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  padding: 5px 1px;
`

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 20px 10px;
`;
