import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0 0 5px 5px;
    padding: 2%;
    webkit-box-shadow: -4px 8px 33px -6px rgba(5,5,5,0.42);
    -moz-box-shadow: -4px 8px 33px -6px rgba(5,5,5,0.42);
    box-shadow: -4px 8px 33px -6px rgba(5,5,5,0.42);

    @media (min-width: 900px) {
        width:50%;
    }
`;