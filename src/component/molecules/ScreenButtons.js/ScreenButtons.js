import React from "react";
import { Wrapper } from "./ScreenButtons.style";
import { ScreenButton } from "../../atoms/ScreenButton";

const ScreenButtons = () => {

    return (
        <Wrapper>
            <ScreenButton>Balance</ScreenButton>
            <ScreenButton>Withdraw</ScreenButton>
            <ScreenButton >Deposit</ScreenButton>
        </Wrapper>
    )
}

export default ScreenButtons;