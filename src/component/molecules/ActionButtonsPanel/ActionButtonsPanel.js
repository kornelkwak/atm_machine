import React from "react";
import { Wrapper } from "./ActionButtonsPanel.style";
import { ActionButton } from "../../atoms/ActionButton";
import { Link } from 'react-router-dom';

const ActionButtonsPanel = ({ handleConfirm, handleClear }) => {

    return (

        <Wrapper>
            <ActionButton onClick={ handleClear }>Clear</ActionButton>
            <Link to="/">
                <ActionButton>Cancel</ActionButton>
            </Link>
            <ActionButton onClick={ handleConfirm }>Confirm</ActionButton>
        </Wrapper>
    )
}

export default ActionButtonsPanel;