import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  height: 375px;
  align-items: center;
  position: relative;
  border-radius: .25rem;
  border-style: groove;
  margin: 10px;

  &:hover {
    background-color: lightblue;
    cursor: pointer;
    
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const CardTitle = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  padding: 10px 10px;
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