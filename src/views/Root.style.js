import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  height: 90vh;
  margin: 20px;
  flex-direction: column;
  justify: content: center;
  align-items: center;
   
  @media (min-width: 720px) {
    display: flex;
    justify: content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  display: flex; 
  justify: content: center;
  align-items: center;
  gap: 5px; 
  color: red;
  font-style: italic;
`;
