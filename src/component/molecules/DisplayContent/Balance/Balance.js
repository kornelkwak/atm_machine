import React, { useContext } from "react";
import { BalanceContext } from "../../../../views/Root";

const Balance = () => {
    const balance = useContext(BalanceContext)
    return (
        <>
            <p>Your current account balance is: { balance } zł</p>
        </>
    )
}

export default Balance;