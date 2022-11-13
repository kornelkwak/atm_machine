import React, { useState } from "react";
import { BalanceContext } from "../../../../views/Root";

const Deposit = ({ depositInputValue, handleInput }) => {

    return (
        <>
            <label htmlFor="deposit">Deposit: </label>
            <input name="deposit" type="text" value={ depositInputValue } onChange={ handleInput } />
        </>
    )
}

export default Deposit;