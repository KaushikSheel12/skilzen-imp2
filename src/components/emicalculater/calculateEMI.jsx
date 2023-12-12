import React, { useState } from 'react';

const Calculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(time) * 12;

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emi.toFixed(2));

    const totalPayments = emi * n;
    setTotalInterest((totalPayments - P).toFixed(2));
    setTotalAmount(totalPayments.toFixed(2));
  };

  return (
    <div>
      <h2>Interest Calculator</h2>
      <div>
        <label>Principal Amount</label>
        <input
          type="range"
          min={0}
          max={1000000}
          step={1000}
          value={principal}
          onChange={(e) => {
            setPrincipal(e.target.value);
            calculateEMI();
          }}
        />
        <span>{principal}</span>
      </div>
      <div>
        <label>Rate of Interest</label>
        <input
          type="range"
          min={0}
          max={20}
          step={0.1}
          value={rate}
          onChange={(e) => {
            setRate(e.target.value);
            calculateEMI();
          }}
        />

      </div>
      <div>
        <label>Time (in years)</label>
        <input
          type="range"
          min={0}
          max={30}
          step={1}
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
            calculateEMI();
          }}
        />
        <span>{time}</span>
      </div>
      <div>
        <label>Monthly EMI</label>
        <div>{emi}</div>
      </div>
      <div>
        <label>Total Interest</label>
        <div>{totalInterest}</div>
      </div>
      <div>
        <label>Total Amount</label>
        <div>{totalAmount}</div>
      </div>
    </div>
  );
};

export default Calculator;
