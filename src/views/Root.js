import React, { useState } from "react";
import Display from "../component/organisms/Display/Display";
import Keyboard from "../component/organisms/Keyboard/Keyboard";

const initialAccountBalance = 10000;

export const BalanceContext = React.createContext();

const Root = () => {
    const [balance, setBalance] = useState(initialAccountBalance);
    const [depositInputValue, setDepositInputValue] = useState('');
    const [withdrawInputValue, setWithdrawInputValue] = useState('');

    console.log(depositInputValue);

    const handleInput = (e) => {
        console.log(e.target)
        if (e.target.name === 'deposit') {
            setDepositInputValue(e.target.value);
        } else {
            setWithdrawInputValue(e.target.value);
        }
    }

    const handleConfirm = () => {
        if (depositInputValue > 0) {
            setBalance(Number(balance) + Number(depositInputValue));
            setDepositInputValue('');
        } else if (withdrawInputValue > 0) {
            Number(withdrawInputValue) <= Number(balance) ? setBalance(Number(balance) - Number(withdrawInputValue)) : alert('Brak wystarczających środków na koncie');
            setWithdrawInputValue('');
        }
    }

    const handleClear = () => {
        setDepositInputValue('');
        setWithdrawInputValue('');
    }

    const handleBtnClick = (e) => {
        setDepositInputValue(depositInputValue + e.target.value);
        setWithdrawInputValue(withdrawInputValue + e.target.value);
        console.log('btn clicked: ' + e.target.value)
    }

    return (
        <div className="Root">
            <BalanceContext.Provider value={ balance }>
                <Display
                    depositInputValue={ depositInputValue }
                    withdrawInputValue={ withdrawInputValue }
                    handleInput={ handleInput }
                />
                <Keyboard
                    handleConfirm={ handleConfirm }
                    handleClear={ handleClear }
                    handleBtnClick={ handleBtnClick }
                />
            </BalanceContext.Provider>
        </div>
    );
}
export default Root;
