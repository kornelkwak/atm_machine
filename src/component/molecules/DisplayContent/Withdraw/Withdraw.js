import React, { useContext } from "react";
import { BalanceContext } from "../../../../views/Root";

const Withdraw = ({ withdrawInputValue, handleInput }) => {

    return (
        <>
            <label htmlFor="withdraw">Withdraw: </label>
            <input name="withdraw" type="text" value={ withdrawInputValue } onChange={ handleInput } />
        </>
    )
}

export default Withdraw;