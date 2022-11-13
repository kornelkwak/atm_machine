import React from "react";
import { Wrapper } from "./ActionButtonsPanel.style";
import { ActionButton } from "../../atoms/ActionButton";
import { Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

const ActionButtonsPanel = ({ handleConfirm, handleClear }) => {

    return (
        <Wrapper>
            <ActionButton><BsArrowLeft size={ 36 } /></ActionButton>
            <Link to="/" style={ { textDecoration: 'none' } }>
                <ActionButton style={ { backgroundColor: '#E20338' } }>CANCEL</ActionButton>
            </Link>
            <ActionButton onClick={ handleClear } style={ { backgroundColor: '#FFE55E' } }>CLEAR</ActionButton>
            <ActionButton onClick={ handleConfirm } style={ { backgroundColor: '#41B619' } }>CONFIRM</ActionButton>
        </Wrapper>
    )
}

export default ActionButtonsPanel;