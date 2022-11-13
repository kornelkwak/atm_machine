import React, { useContext } from "react";
import { StyledInput } from "../../../atoms/StyledInput";

const Withdraw = ({ withdrawInputValue, handleInput }) => {

    return (
        <>
            <label htmlFor="withdraw">Withdraw money: </label>
            <StyledInput name="withdraw" type="text" value={ withdrawInputValue } onChange={ handleInput } />
        </>
    )
}

export default Withdraw;