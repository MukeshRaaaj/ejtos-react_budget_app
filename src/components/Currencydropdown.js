import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css'; 

const Currencydropdown = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (newCurrency) => {
    dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
  };

  return (
    <div className="currency-container">
      <label htmlFor="Currencydropdown" className="currency-label">
      </label>
      <select
        id="Currencydropdown"
        value={currency}
        onChange={(e) => handleCurrencyChange(e.target.value)}
        className="currency-dropdown"
      >
        <option value="$">Currency ($ dollar)</option>
        <option value="£">Currency (£ Pound)</option>
        <option value="€">Currency (€ Euro)</option>
        <option value="₹">Currency (₹ Rupee)</option>
      </select>
    </div>
  );
};

export default Currencydropdown;