import React from "react";
import { Wrapper } from "./ScreenButtons.style";
import { ScreenButton } from "../../atoms/ScreenButton";
import { Link } from 'react-router-dom';

const ScreenButtons = () => {

    return (

        <Wrapper>
            <Link to="/balance" style={ { textDecoration: 'none' } }>
                <ScreenButton>BALANCE</ScreenButton>
            </Link>
            <Link to="/deposit" style={ { textDecoration: 'none' } }>
                <ScreenButton>DEPOSIT</ScreenButton>
            </Link>
            <Link to="/withdraw" style={ { textDecoration: 'none' } }>
                <ScreenButton>WITHDRAW</ScreenButton>
            </Link>
        </Wrapper>
    )
}

export default ScreenButtons;