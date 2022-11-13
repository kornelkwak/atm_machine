import React, { useContext } from "react";
import { BalanceContext } from "../../../../views/Root";

const Balance = () => {
    const balance = useContext(BalanceContext)
    return (
        <>
            <p>Your current account balance is:</p>
            <p><b>{ balance.toFixed(2) } zł</b></p>
        </>
    )
}

export default Balance;