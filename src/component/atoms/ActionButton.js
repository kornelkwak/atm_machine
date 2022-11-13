import styled from 'styled-components';

export const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  height: 100%;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  background-color: #EEF0ED;
  webkit-box-shadow: -4px 8px 33px -6px rgba(5,5,5,0.42);
  -moz-box-shadow: -4px 8px 33px -6px rgba(5,5,5,0.42);
  box-shadow: -4px 8px 33px -6px rgba(5,5,5,0.42);
  :hover {
    background-color: #D4DADE;
  }
`;
