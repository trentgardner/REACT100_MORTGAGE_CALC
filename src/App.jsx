import './App.css'
import { useState } from 'react'

function App() {
  const [balance, setBalance] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('15');
  const [output, setOutput] = useState('');
  
  const calculate = (balance, rate, term) => {
    let principal = balance;
    let monthlyInterestRate = (rate/100) / 12;
    let numOfPayments = term * 12;
    const compound = Math.pow(1 + monthlyInterestRate, numOfPayments);
    let monthlyPayments = principal * (monthlyInterestRate * compound) / (compound - 1);
    setOutput(`$${monthlyPayments.toFixed(2)} is your payment`);
  }
  
  
  return (
    <>
      <div className="container">
        <h1>Mortgage Calculator</h1>
        <label htmlFor="balance">Loan Balance</label>
        <input data-testid="balance" 
          type="number" 
          id="balance"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}/>
        <label htmlFor="rate">Interest Rate (%)</label>
        <input data-testid="rate"
          type="number"
          step="0.01"
          id="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}/>
        <label htmlFor="term">Loan Term (years)</label>
        <select data-testid="term"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}>
          <option value="15">15</option>
          <option value="30">30</option>
        </select>
        <button data-testid="submit"
          onClick={() => calculate(balance, rate, term)}>Calculate</button>
        <div data-testid="output" id="output">
          {output}
        </div>
      </div>
    </>
  )
}

export default App
