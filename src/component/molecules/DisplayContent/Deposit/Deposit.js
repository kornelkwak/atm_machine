import React, { useState } from "react";
import { StyledInput } from "../../../atoms/StyledInput";
const Deposit = ({ depositInputValue, handleInput }) => {

    return (
        <>
            <label htmlFor="deposit">Deposit money: </label>
            <StyledInput name="deposit" type="text" value={ depositInputValue } onChange={ handleInput } />
        </>
    )
}

export default Deposit;