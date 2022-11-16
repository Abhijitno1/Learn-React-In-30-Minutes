import React from 'react';

export default function CurrencyRow(props) {
  const {
    amount,
    currencyOptions,
    onChangeAmount,
    selectedCurrency,
    onCurrencyChange
  } = props;
  return (
    <div>
      <input type="number" className="currency" value={amount} onChange={onChangeAmount}/>
      <select className="currency" value={selectedCurrency} onChange={onCurrencyChange}>
        {
          currencyOptions.map(opt =>
            <option key={opt} value={opt}>{opt}</option>
          )
        }
      </select>
    </div>
  )
}