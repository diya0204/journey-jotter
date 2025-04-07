import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [splitValue, setSplitValue] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const totalIncome = transactions.filter(t => t.type === "income").reduce((sum, t) => sum + t.amount, 0);
    const totalExpense = transactions.filter(t => t.type === "expense").reduce((sum, t) => sum + t.amount, 0);
    setBalance(totalIncome - totalExpense);
    setIncome(totalIncome);
    setExpense(totalExpense);
  }, [transactions]);

  const addTransaction = (e) => {
    e.preventDefault();
    if (!name || isNaN(amount) || amount <= 0 || !date) {
      alert("Please enter valid details.");
      return;
    }
    setTransactions([...transactions, { name, amount: parseFloat(amount), type: transactionType, date }]);
    setName("");
    setAmount("");
    setDate("");
  };

  const calculateSplit = () => {
    const selectedExpenses = transactions.filter(t => t.type === "expense");
    const totalSelectedExpense = selectedExpenses.reduce((sum, t) => sum + t.amount, 0);
    if (totalSelectedExpense <= 0) {
      alert("No expense transactions available for splitting.");
      return;
    }
    const members = prompt("Enter the number of members to split among:");
    if (!members || isNaN(members) || members <= 0) {
      alert("Invalid number of members.");
      return;
    }
    setSplitValue(totalSelectedExpense / members);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="overflow-y-hidden"> 
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-gray-900 text-white fixed w-full z-10 top-0 left-0 ">
        <div className="logo">
          <a href="/Dashboard" className="text-white text-decoration-none text-xl font-semibold">
            Journey<span className="text-sky-400">jotter</span>
          </a>
        </div>
        <ul className="flex space-x-4">
          <li><a className="text-white hover:text-sky-400" href="/">Home</a></li>
          <li><a className="text-white hover:text-sky-400" href="/About">About</a></li>
          <li><a className="text-white hover:text-sky-400" href="/Packages">Packages</a></li>
          <li><a className="text-white hover:text-sky-400" href="/Create">Customize</a></li>
          <li><a className="text-white hover:text-sky-400" href="/Contact">Contact</a></li>
          <li><a className="text-white hover:text-sky-400" href="/Login">Login</a></li>
        </ul>
      </header>
    </div>

    <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-md text-white mt-20">
      <header className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-4 bg-gray-700 rounded-md text-center">
          <h4 className="text-gray-400">Total Balance</h4>
          <p className="text-xl font-bold">₹{balance.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-gray-700 rounded-md text-center">
          <h4 className="text-gray-400">Income</h4>
          <p className="text-xl text-green-400 font-bold">₹{income.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-gray-700 rounded-md text-center">
          <h4 className="text-gray-400">Expense</h4>
          <p className="text-xl text-red-400 font-bold">₹{expense.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-gray-700 rounded-md text-center">
          <h4 className="text-gray-400">Split</h4>
          <p className="text-xl font-bold">₹{splitValue.toFixed(2)}</p>
        </div>
      </header>
      
      <form onSubmit={addTransaction} className="space-y-4">
        <div className="flex items-center">
          <label className="mr-2">Type:</label>
          <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)} className="bg-gray-700 p-2 rounded">
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter transaction name" className="w-full p-2 bg-gray-700 rounded" required />
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" className="w-full p-2 bg-gray-700 rounded" required min="0" step="any" />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 bg-gray-700 rounded" required />
        <button type="submit" className="w-full bg-blue-500 p-2 rounded text-white">Add Transaction</button>
      </form>
      
      <ul className="mt-4">
        {transactions.map((transaction, index) => (
          <li key={index} className="flex justify-between bg-gray-700 p-2 my-2 rounded">
            <div>
              <strong>{transaction.name}</strong>
              <small className="block">{transaction.date}</small>
            </div>
            <span className={transaction.type === "income" ? "text-green-400" : "text-red-400"}>₹{transaction.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      
      <section className="split-section mt-4">
        <h3 className="text-center text-lg font-bold">Split Expense</h3>
        <button onClick={calculateSplit} className="w-full bg-purple-500 p-2 mt-2 rounded text-white">Calculate Split</button>
      </section>
    </div>
  </div>
  );
};

export default ExpenseTracker;
