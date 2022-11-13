import React from "react";
import { Wrapper } from "./ActionButtonsPanel.style";
import { ActionButton } from "../../atoms/ActionButton";

const ActionButtonsPanel = ({ handleConfirm, handleClear }) => {

    return (
        <Wrapper>
            <ActionButton onClick={ handleClear }>Clear</ActionButton>
            <ActionButton>Cancel</ActionButton>
            <ActionButton onClick={ handleConfirm }>Confirm</ActionButton>
        </Wrapper>
    )
}

export default ActionButtonsPanel;