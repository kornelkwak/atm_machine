import styled from 'styled-components';

export const ScreenButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin: 5px;
  height: 55px;
  width: 150px;
  cursor: pointer;
  border: 3px solid #2E3F7F;
  border-radius: 5px;
  background: none;
  
  :hover {
    background: #2E3F7F;
    color: white;
  }
  
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
