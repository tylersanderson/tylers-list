import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  height: 350px;
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
