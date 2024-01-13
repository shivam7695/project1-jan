import React, { useState } from 'react';
import './App.css'; // Import your stylesheet

const Calculator = () => {
  // State for input fields
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  // State for result and error messages
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to validate input
  const validateInput = () => {
    setErrorMessage('');

    if (!num1.trim() || !num2.trim() || isNaN(num1) || isNaN(num2)) {
      setErrorMessage('Invalid input. Please enter valid numbers.');
      return false;
    }

    return true;
  };

  // Functions for arithmetic operations
  const handleAddition = () => {
    if (validateInput()) {
      setResult(parseFloat(num1) + parseFloat(num2));
    }
  };

  const handleSubtraction = () => {
    if (validateInput()) {
      setResult(parseFloat(num1) - parseFloat(num2));
    }
  };

  const handleMultiplication = () => {
    if (validateInput()) {
      setResult(parseFloat(num1) * parseFloat(num2));
    }
  };

  const handleDivision = () => {
    if (validateInput()) {
      setResult(parseFloat(num1) / parseFloat(num2));
    }
  };

  return (
    <div className="calculator">
      <div>
        <label>Number 1:</label>
        <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} />
      </div>
      <div>
        <label>Number 2:</label>
        <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} />
      </div>
      <div className='btn'>
      <button onClick={handleAddition}>Add</button>
      <button onClick={handleSubtraction}>Subtract</button>
      <button onClick={handleMultiplication}>Multiply</button>
      <button onClick={handleDivision}>Divide</button>
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {result && <p className="success">Result: {result}</p>}
    </div>
  );
};

export default Calculator;
