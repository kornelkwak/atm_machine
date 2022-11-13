import React from "react";
import { Wrapper } from "./ActionButtonsPanel.style";
import { ActionButton } from "../../atoms/ActionButton";
import { Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { theme } from "../../../assets/theme";

const ActionButtonsPanel = ({ handleConfirm, handleClear, handleBack }) => {

    return (
        <Wrapper>
            <ActionButton onClick={ handleBack }><BsArrowLeft size={ 36 } /></ActionButton>
            <Link to="/" style={ { textDecoration: 'none' } }>
                <ActionButton style={ { backgroundColor: theme.colors.red } }>CANCEL</ActionButton>
            </Link>
            <ActionButton onClick={ handleClear } style={ { backgroundColor: theme.colors.yellow } }>CLEAR</ActionButton>
            <ActionButton onClick={ handleConfirm } style={ { backgroundColor: theme.colors.green } }>ENTER</ActionButton>
        </Wrapper>
    )
}

export default ActionButtonsPanel;