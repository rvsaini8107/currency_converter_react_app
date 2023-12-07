import React,{useId} from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable=false,
  currencyDisable=false,


  className = "",
}) {
  return (
    <div className={`inputBox-main bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="inputType-main w-1/2">
        <label htmlFor={useId()} className="input_label text-black/40 mb-2 inline-block">{label}</label>
        <input
          id={useId()}
          className="inputbox_input outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value ))}
        />
      </div>
      <div className="inputType-main w-1/2 flex flex-wrap justify-end text-right">
        <p className="inputType_title text-black/40 mb-2 w-full">Currency Type</p>
        <select className="inputType_select  rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        value={selectCurrency}
        disabled={currencyDisable}
        onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency)=>(
             <option key={currency} value={currency}>{currency}</option>
          ))}
         
        </select>
      </div>
    </div>
  );
}

export default InputBox;
