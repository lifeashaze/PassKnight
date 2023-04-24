const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const PORT = 3001
app.use(cors())
app.use(express.json())
const { encrypt, decrypt } = require("./EncryptionHandler");

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'password03',
    database:'passwordmanager'

})

app.post("/addpassword", (req, res) => {
    const { password, title } = req.body;
    const encyptedPassword = encrypt(password);
    db.query(
      "INSERT INTO passwords (password, title, iv) VALUES (?,?,?)",
      [encyptedPassword.password, title, encyptedPassword.iv],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Success");
        }
      }
    );
  });

app.get("/showpasswords", (req,res) =>{
  db.query('SELECT * FROM passwords;', (err,result)=>{
    if(err){
      console.log(err)
    } else{
      res.send(result) 
    }
  })
})

app.post('/decryptpassword',(req, res)=>{
  res.send(decrypt(req.body))
})

app.listen(PORT, ()=>{
    console.log("Server is running!")
})
