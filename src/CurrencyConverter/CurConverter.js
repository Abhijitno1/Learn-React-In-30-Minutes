import React, { useEffect, useState } from "react";
import CurrencyRow from "./CurrencyRow";
const BASE_API_URL= 'https://api.currencyfreaks.com/latest?apikey=57fe31073c7e44efb2d291bc10e6d351&format=json'

export default function CurConverter () {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency]= useState();
    const [toCurrency, setToCurrency] = useState();
    const [exchangeRate, setExchangeRate]= useState();
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [amtChangeInFromCcy, setAmtChangeInFromCcy] = useState(true);
    //https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
    var rateDate = new Date().toLocaleDateString("en-US", {day:'numeric', month: 'long', year: 'numeric'});
    var dummyData = {
        "date": "2020-07-02 10:39:00+00",
        "base": "USD",
        "rates": {
            "FJD": 2.1692,
            "MXN": 22.602,
            "STD": 22000.6197,
            "SCR": 17.6,
            "LVL": 0.6563,
            "CDF": 1907.87,
            "BBD": 2.0,
            "GTQ": 7.7,
            "CLP": 808.6,
            "UGX": 3721.0,
            "HNL": 24.7553,
            "ZAR": 16.9326,
            "TND": 2.8445,
            "CUC": 1.0,
            "SLL": 9778.35,
            "BSD": 1.0,
        }
    };

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
        console.log('fetching api from outside');
        fetch(BASE_API_URL)
        .then(res => res.json())
        .then(data => {//console.log('data', data));
            //let data = dummyData;
            localStorage.setItem('dummyData', JSON.stringify(data));
            rateDate = data.date;
            let curopts = [...Object.keys(data.rates)];
            curopts = curopts.sort();
            let baseCurrency = data.base, firstCurrency= "INR";
            setCurrencyOptions(curopts);
            setFromCurrency(baseCurrency);
            setToCurrency(firstCurrency);
            setExchangeRate(data.rates[firstCurrency])
        });
    }, []);

    useEffect(()=>{
         /*fetch(`BASE_API_URL&symbols${toCurrency}`)
        .then(res => res.json())
        .then(data => console.log('data', data));*/
        if (!(fromAmount && toAmount)) return; //Both from and to amounts must be > 0
        dummyData = JSON.parse(localStorage.getItem('dummyData'))
        let data= dummyData;
        let proprate;
        if (fromCurrency == data.base)
            proprate = data.rates[toCurrency];
        else
            proprate = parseFloat(data.rates[toCurrency]) / parseFloat(data.rates[fromCurrency]);

        console.log('proprate', proprate);
        setExchangeRate(proprate);
    }, [fromCurrency, toCurrency]);

    function handleFromAmountChange(e) {
        setAmount(e.target.value);
        setAmtChangeInFromCcy(true);
    }

    function handleToAmountChange(e) {
        setAmount(e.target.value);
        setAmtChangeInFromCcy(false);
    }

    return (
        <>
            <h1>Convert</h1>
            <h2>Rates as of {rateDate}</h2>
            <CurrencyRow amount={fromAmount} onChangeAmount={handleFromAmountChange}
                currencyOptions = {currencyOptions}
                selectedCurrency={fromCurrency} onCurrencyChange={e =>setFromCurrency(e.target.value)}
            />
            <div className="equals">=</div>
            <CurrencyRow amount={toAmount} onChangeAmount={handleToAmountChange}
                currencyOptions = {currencyOptions}
                selectedCurrency={toCurrency} onCurrencyChange={e =>setToCurrency(e.target.value)}
            />
        </>
    )
}
