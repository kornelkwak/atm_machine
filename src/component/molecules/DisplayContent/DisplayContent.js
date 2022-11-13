import React from "react";
import { Wrapper } from "./DisplayContent.style";
import Balance from "./Balance/Balance";
import Deposit from "./Deposit/Deposit";
import Withdraw from "./Withdraw/Withdraw";

const DisplayContent = ({ depositInputValue, withdrawInputValue, handleInput }) => {

    return (
        <Wrapper>
            <h2>Choose your action</h2>
            <Balance></Balance>
            <Deposit depositInputValue={ depositInputValue } handleInput={ handleInput }></Deposit>
            <Withdraw withdrawInputValue={ withdrawInputValue } handleInput={ handleInput }></Withdraw>
        </Wrapper>
    )
}

export default DisplayContent;