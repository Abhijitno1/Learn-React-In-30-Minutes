import React, { useEffect, useState } from "react";
import CurrencyRow from "./CurrencyRow";
const BASE_API_URL= 'https://api.exchangeratesapi.io/latest'

export default function CurConverter () {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency]= useState();
    const [toCurrency, setToCurrency] = useState();
    const [exchangeRate, setExchangeRate]= useState();
    const [currencyOptions, setCurrencyOptions] = useState();
    const [amtChangeInFromCcy, setAmtChangeInFromCcy] = useState(true);
    const dummyData = ["abc", [{pqr: 0.90}, {stu: 1}, {xyz: 1.2}]];

    let toAmount, fromAmount;
    if (amtChangeInFromCcy) {
        fromAmount = amount;
        toAmount = amount * exchangeRate;
    }
    else {
        toAmount = amount;
        fromAmount = amount / exchangeRate;
    }

    useEffect(()=>{
        const firstCurrency = "abc";
        setCurrencyOptions(["abc", "pqr", "stu", "xyz"]);
        setFromCurrency("abc");
        setToCurrency("pqr");
        setExchangeRate(0.90)
    }, []);

    /*useEffect(()=>{
        
    }, [fromCurrency, toCurrency]);*/

    function handleFromAmountChange(e) {
        setAmount(e.target.value);
    }

    function handleToAmountChange(e) {
        setAmount(e.target.value);
    }

    return (
        <>
            <h1>Convert</h1>
            <CurrencyRow amount={amount} onChangeAmount={handleFromAmountChange}
                currencyOptions = {currencyOptions}
                selectedCurrency={fromCurrency} onCurrencyChange={e =>setFromCurrency(e.target.value)}
            />
            <div className="equals">=</div>
            <CurrencyRow amount={amount} onChangeAmount={handleToAmountChange}
                currencyOptions = {currencyOptions}
                selectedCurrency={toCurrency} onCurrencyChange={e =>setToCurrency(e.target.value)}
            />
        </>
    )
}
