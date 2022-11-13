import React from "react";
import { Wrapper } from "./ScreenButtons.style";
import { ScreenButton } from "../../atoms/ScreenButton";
import { Link } from 'react-router-dom';

const ScreenButtons = () => {

    return (

        <Wrapper>

            <Link to="/balance">
                <ScreenButton>Balance</ScreenButton>
            </Link>
            <Link to="/deposit">
                <ScreenButton>Deposit</ScreenButton>
            </Link>
            <Link to="/withdraw">
                <ScreenButton>Withdraw</ScreenButton>
            </Link>

        </Wrapper>
    )
}

export default ScreenButtons;