import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  font-size: 40px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  webkit-box-shadow: -4px 8px 33px -6px rgba(5,5,5,0.42);
  -moz-box-shadow: -4px 8px 33px -6px rgba(5,5,5,0.42);
  box-shadow: -4px 8px 33px -6px rgba(5,5,5,0.42);
  :hover {
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;