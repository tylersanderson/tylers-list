import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

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
