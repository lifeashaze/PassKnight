import './App.css';


const password = document.getElementById("str-checker");
const rating = document.getElementById("strength")
const strMeter = document.getElementById("str-meter")
const ratingWords = document.getElementById("strength-text")
const timeToCrack = document.getElementById("time-to-crack")

var inputValue = ""



function checkPasswordStrength(password) {
    // Define our regex patterns to match different types of characters
    const lowercaseRegex = /[a-z]/g;
    const uppercaseRegex = /[A-Z]/g;
    const numberRegex = /[0-9]/g;
    const symbolRegex = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g;
  
    // Determine the strength of the password based on the number of different types of characters
    let strength = 0;
    if (password.match(lowercaseRegex)) {
      strength++;
    }
    if (password.match(uppercaseRegex)) {
      strength++;
    }
    if (password.match(numberRegex)) {
      strength++;
    }
    if (password.match(symbolRegex) || password.includes("@")) {
      strength++;
    }
  
    // Determine the final strength value based on the length of the password
    if (password.length >= 8) {
      strength++;
    }
    if (password.length >= 12) {
      strength++;
    }
  return strength
  }
  
password.addEventListener("input", (e)=>{
    inputValue = e.target.value

    var passPoints = checkPasswordStrength(inputValue)
    if(passPoints===1 || passPoints==2){
        strMeter.style.backgroundColor = `rgb(255, 0, 0)`
        strMeter.style.width = `25%`
        strMeter.style.transition = `0.2s ease-in`
        ratingWords.innerText = `Weak`
        ratingWords.style.color = `rgb(255, 0, 0)`
        timeToCrack.innerHTML = `Less than an hour`
    }  else if(passPoints===3){
      strMeter.style.backgroundColor = `rgb(255, 215, 0)`
      strMeter.style.width = `50%`
      strMeter.style.transition = `0.2s ease-in`
      ratingWords.innerText = `Moderate`
      ratingWords.style.color = `rgb(255, 215, 0)`
      timeToCrack.innerHTML = `Within 3 days`
    } else if(passPoints===4){
      strMeter.style.backgroundColor = `rgb(152, 153, 255)`
      strMeter.style.width = `75%`
      strMeter.style.transition = `0.2s ease-in`
      ratingWords.innerText = `Strong`
      ratingWords.style.color = `rgb(152, 153, 255)`
      timeToCrack.innerHTML = `Within a month`
    } else if(passPoints>4){
      strMeter.style.backgroundColor = `rgb(0, 128, 0)`
      strMeter.style.width = `100%`
      strMeter.style.transition = `0.2s ease-in`
      ratingWords.innerText = `Fortified`
      ratingWords.style.color = `rgb(0, 128, 0)`
      timeToCrack.innerHTML = `Within years or decades`
    } else{
      strMeter.style.backgroundColor = ``
      strMeter.style.transition = `0.2s ease-in`
      ratingWords.innerText = ``
      timeToCrack.innerHTML = ``
    }
  
})

function App() {
  return (
    <div className="App">
     <div>
  <nav className="navbar">
    <h1>
      PassKnight
    </h1>
  </nav>
  <main>
    <section className="hero">
      <div className="hero-text">
        <h1>
          Take charge of your digital fortress. 
        </h1>
        <p>
          Our cutting-edge app empowers you to master password <br /> management.
        </p>
      </div>
      <div className="hero-btns">
        <button className="try-btn" id="try-btn">Try it Out</button>
      </div>
    </section>
    <section className="features">
      <div className="features-imgs">
        <img src="/assets/Secure_Lineal-coloured.svg" alt="" />
        <img src="/assets/Database Security_Lineal-coloured.svg" alt="" />
        <img src="/assets/icons8-lock.svg" alt="" />
      </div>
      <div className="features-desc">
        <p>Data is encrypted using a symmetric encryption algorithm before being sent to the server.</p>
        <p>All os the data stored in a secured MySQL Server.</p>
        <p>Generate secure passwords instantly with a click of a button!</p>
      </div>
    </section>
    <section className="faq">
      <div className="faq-title">
        <h4>F.A.Q</h4>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faq-qs">
        <div className="faq-q">
          <div className="num-rounded">
            <span>1</span> 
          </div>
          <div className="faq-text">
            <h2>What is a password manager and why should I use one?</h2>
            <p>A password manager is a tool that securely stores and manages all of your passwords. Using a password manager can make it easier to create and use strong, unique passwords, and reduces the risk of security breaches.</p>
          </div>
        </div>
        <div className="faq-q">
          <div className="num-rounded">
            <span>2</span> 
          </div>
          <div className="faq-text">
            <h2>Is it safe to store my passwords in a password manager?</h2>
            <p>Yes, using a trusted password manager like PassKnight is generally safe, but it's important to take appropriate precautions such as using a strong master password and enabling two-factor authentication to further enhance security.</p>
          </div>
        </div>
        <div className="faq-q">
          <div className="num-rounded">
            <span>3</span> 
          </div>
          <div className="faq-text">
            <h2>Can I access my passwords on multiple devices?</h2>
            <p>Most password managers allow you to sync your passwords across multiple devices, including computers, smartphones, and tablets. This makes it easy to access your passwords wherever you are.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="pass-str-checker">
      <div className="pass-checker">
        <div className="pass-title">
          <h1>Password Strength Checker</h1>
          <p>Keep your data safe. Test the strength of your passwords and improve your online security.</p>
          <p id="strength" />
        </div>
        <div className="pass-input-container">
          <div className="pass-input">
            <input type="text" id="str-checker" />
            <div className="strength" id="str-meter" />
          </div>
          <div className="strength-in-words">
            <h2 id="strength-text" />
            <h3 id="time-to-crack" />
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <h4 style={{color: 'gray', fontSize: '0.5rem'}}>~A Mini-Project made for Vishwakarma University~</h4>
  </footer>
</div>

    </div>
  );
}

export default App;
