import React from "react";
import { Wrapper } from "./Display.style";
import ScreenButtons from "../../molecules/ScreenButtons.js/ScreenButtons";
import DisplayContent from "../../molecules/DisplayContent/DisplayContent";

const Display = ({ depositInputValue, withdrawInputValue, handleInput }) => {
    return (
        <Wrapper>
            <DisplayContent
                withdrawInputValue={ withdrawInputValue }
                depositInputValue={ depositInputValue }
                handleInput={ handleInput }
            >
            </DisplayContent>
            <ScreenButtons></ScreenButtons>
        </Wrapper>
    )
}

export default Display;