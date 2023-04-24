import React, { useState } from 'react';
import './App5.css'

const PasswordGenerator = () => {
  const [password, setPassword] = useState('Alos@sdc>@12s');
  
  const generatePassword = () => {
    const length = 16; 
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(password);
  }

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard');
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
    <div className='genContainerC'>
        <div className="genContainer">
      <h1>Password Generator</h1>
      <button className='pnbtn2' onClick={generatePassword}>Generate Password</button>
      <p>Your Password: {password}</p>
      <button onClick={copyPassword} className='pnbtn2'>Copy Password</button>
      </div>
    </div>
    </div>
  );
}

export default PasswordGenerator;
