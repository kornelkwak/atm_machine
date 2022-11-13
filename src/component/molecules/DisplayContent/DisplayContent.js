import React from "react";
import { Wrapper } from "./DisplayContent.style";
import Balance from "./Balance/Balance";
import Deposit from "./Deposit/Deposit";
import Withdraw from "./Withdraw/Withdraw";
import { Routes, Route } from 'react-router-dom';

const DisplayContent = ({ depositInputValue, withdrawInputValue, handleInput }) => {

    return (
        <Wrapper>
            <Routes>
                <Route exact path="/" element={
                    <h3>Choose your action</h3>
                } />
                <Route exact path="/balance" element={
                    <Balance></Balance>
                } />
                <Route exact path="/deposit" element={
                    <Deposit depositInputValue={ depositInputValue } handleInput={ handleInput }></Deposit>
                } />
                <Route exact path="/withdraw" element={
                    <Withdraw withdrawInputValue={ withdrawInputValue } handleInput={ handleInput }></Withdraw>
                } />
            </Routes>
        </Wrapper>
    )
}

export default DisplayContent;