import './App4.css'
import { useState, useEffect } from 'react'
import Axios from 'axios'
function PassKnight() {

const [password,setPassword] = useState("");
const [title,setTitle] = useState("");
const [passwordList, setPasswordList] = useState([])

useEffect(()=>{
  Axios.get("http://localhost:3001/showpasswords").then((response)=>{
  setPasswordList(response.data)
  })
}, [])

const addPassword = ()=>{ 
  Axios.post("http://localhost:3001/addpassword",{
  password: password, 
  title:title})
  window.location.reload(true)
}

const decryptPassword = (encryption)=>{
  Axios.post("http://localhost:3001/decryptpassword",{
    password: encryption.password,
    iv: encryption.iv,
  }).then((response)=>{
    setPasswordList(passwordList.map((val)=>{
      return val.id === encryption.id ? {id: val.id, password: val.password, title: response.data, iv: val.iv}: val;
    }))
  })
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
    <div className="container2">
  <nav className="navbar2">
    <h2>PassKnight Password Manager</h2>
  </nav>
  <div className="password-input-fields">
    <div className="input-container">
      <div className="title">
        Add an Account
      </div>
      <div className="input-fields">
        <div className="app-name">
          <h3>Website:</h3>
          <input type="text" onChange={(e)=>{
        setTitle(e.target.value)
      }} />
        </div>
        <div className="app-password">
          <h3>Password:</h3>
          <input type="text" name id="pwd-input"  onChange={(e)=>{
        setPassword(e.target.value)
      }} />
        </div>
      </div>
      <div className="buttons">
        <button className="add-pwd pnbtn" id="add-pwd" onClick={addPassword}>Add</button>
      </div>
    </div>
  </div>
  <div className="saved-pwds-container">
    <div className="saved-pwds">
      
    {passwordList.map((val,key)=>{
        return <div className="saved-pwd">
        <h4>{val.title}</h4>
        <p id='user-pwd'></p>
        <button className="reveal pnbtn" onClick={()=>{
          decryptPassword({
            password: val.password,
            iv: val.iv,
            id: val.id
          }) 
          document.getElementById('user-pwd').textContent = password
          
        }
        }key={key}>Reveal</button>
      </div>

      })}
      
    </div>
  </div>
  
</div>
</div>

  );
}

export default PassKnight;
