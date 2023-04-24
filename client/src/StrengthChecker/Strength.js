import React, { useState } from 'react';
import "./App6.css"

const PasswordStrengthAnalyzer = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const analyzePassword = () => {
    const strengthLevels = {
      0: 'Very Weak',
      1: 'Weak',
      2: 'Fair',
      3: 'Strong',
      4: 'Very Strong'
    };

    let score = 0;
    if (password.length < 8) {
      setStrength(strengthLevels[0]);
      return;
    }
    if (/[a-z]/.test(password)) {
      score++;
    }
    if (/[A-Z]/.test(password)) {
      score++;
    }
    if (/[0-9]/.test(password)) {
      score++;
    }
    if (/[^a-zA-Z0-9]/.test(password)) {
      score++;
    }
    setStrength(strengthLevels[score]);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
<div>
<nav className="navbar">
    <div>
    <a style={{color: 'white'}} href="http://localhost:3000">
      PassKnight
    </a>
    </div>
    <div className="navList">
      <ul>
        <a href="http://localhost:3000/generator">Generator</a>
        <a href="http://localhost:3000/passknight">Manager</a>
        <a href="http://localhost:3000/strength">Strength-Checker</a>
      </ul>
    </div>
  </nav>

    <div className='strContainerC'>
        <div className="strContainer">
      <h1>Password Strength Analyzer</h1>
      <label>
        <span className="strpara">Password:</span>
        <input type="text" className='strCheckerInput' value={password} onChange={handlePasswordChange} />
      </label>
      <button onClick={analyzePassword} className='pnbtn2'>Analyze Password</button>
      {strength && (
        <p>Password strength: {strength}</p>
      )}
      </div>
    </div>
    </div>
  );
}

export default PasswordStrengthAnalyzer;