import styled from 'styled-components';

export const MyGigsTakenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  height: 50px;
  color: white;
  font-size: 15px;
  padding: 15px 5px 50px 5px;
  font-weight: 900;
  transition: transform .3s;
  &:hover {
    transform: translateY(-0.1rem) scale(1.03);
  }
`;

export const MyGigsTakenTitleContainer = styled.button`
  height: 50px;
  padding: 10px 10px;
  color: white;
  background-color: black;
  border-radius: 100px;
  &:hover {
    text-decoration: none;

  }
`;

export const MyGigsPostedTitleContainer = styled.button`
  height: 100%;
  color: black;
  border: none;
  background: none;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    color: blue;
  }
`;