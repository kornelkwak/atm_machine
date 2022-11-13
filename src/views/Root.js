import React, { useState } from "react";
import Display from "../component/organisms/Display/Display";
import Keyboard from "../component/organisms/Keyboard/Keyboard";
import { GlobalStyle } from "../assets/GlobalStyle";
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer, Title } from "./Root.style";
import { BsFillCreditCard2BackFill } from "react-icons/bs";


const initialAccountBalance = 10000;

export const BalanceContext = React.createContext();

const Root = () => {

    const [balance, setBalance] = useState(initialAccountBalance);
    const [depositInputValue, setDepositInputValue] = useState('');
    const [withdrawInputValue, setWithdrawInputValue] = useState('');

    //function clears inputs
    const clearInputs = () => {
        setDepositInputValue('');
        setWithdrawInputValue('');
    }

    const handleInput = (e) => {
        if (e.target.name === 'deposit') {
            setDepositInputValue(e.target.value);
        } else if (e.target.name === 'withdraw') {
            setWithdrawInputValue(e.target.value);
        }
    }

    const handleConfirm = () => {

        if (window.location.pathname === '/deposit') {
            //check if depositInputValue is valid number
            (!Number.isNaN(Number(depositInputValue))) ? setBalance(Number(balance) + Number(depositInputValue)) : alert('Your value is not a number!');
            clearInputs();
        } else if (window.location.pathname === '/withdraw') {
            //check if withdrawInputValue is valid number
            if (!Number.isNaN(Number(withdrawInputValue))) {
                Number(withdrawInputValue) <= Number(balance) ? setBalance(Number(balance) - Number(withdrawInputValue)) : alert('There are not enough funds in the account');
            }
            clearInputs();
        } else {
            clearInputs();
        }
    }

    const handleClear = () => {
        clearInputs();
    }

    const handleBtnClick = (e) => {
        setDepositInputValue(depositInputValue + e.target.value);
        setWithdrawInputValue(withdrawInputValue + e.target.value);
    }

    return (
        <Router>
            <GlobalStyle />
            <BalanceContext.Provider value={ balance }>
                <AppContainer>
                    <Title><BsFillCreditCard2BackFill />ATM MACHINE</Title>
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
                </AppContainer>

            </BalanceContext.Provider>
        </Router>
    );
}
export default Root;
