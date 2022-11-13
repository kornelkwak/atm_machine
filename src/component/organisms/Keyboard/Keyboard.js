import React from "react";
import { Wrapper } from "./Keyboard.style";
import NumberButtonsPanel from "../../molecules/NumberButtonsPanel/NumberButtonsPanel";
import ActionButtonsPanel from "../../molecules/ActionButtonsPanel/ActionButtonsPanel";

const Keyboard = ({ handleConfirm, handleBtnClick, handleClear }) => {
    return (
        <Wrapper>
            <NumberButtonsPanel handleBtnClick={ handleBtnClick } />
            <ActionButtonsPanel handleConfirm={ handleConfirm } handleClear={ handleClear } />
        </Wrapper>
    )
}

export default Keyboard;