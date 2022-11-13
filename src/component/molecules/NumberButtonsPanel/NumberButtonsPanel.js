import React from "react";
import { Wrapper } from "./NumberButtonsPanel.style";
import { Button } from "../../atoms/Button";

const NumberButtonsPanel = ({ handleBtnClick }) => {

    return (
        <Wrapper>
            <Button onClick={ handleBtnClick } value='1'>1</Button>
            <Button onClick={ handleBtnClick } value='2'>2</Button>
            <Button onClick={ handleBtnClick } value='3'>3</Button>
            <Button onClick={ handleBtnClick } value='4'>4</Button>
            <Button onClick={ handleBtnClick } value='5'>5</Button>
            <Button onClick={ handleBtnClick } value='6'>6</Button>
            <Button onClick={ handleBtnClick } value='7'>7</Button>
            <Button onClick={ handleBtnClick } value='8'>8</Button>
            <Button onClick={ handleBtnClick } value='9'>9</Button>
            <Button onClick={ handleBtnClick } value='.'>.</Button>
            <Button onClick={ handleBtnClick } value='0'>0</Button>
            <Button onClick={ handleBtnClick } value='00'>00</Button>
        </Wrapper>
    )
}

export default NumberButtonsPanel;