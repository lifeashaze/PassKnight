import './App3.css'

function Main(){
    return(
        <div className="mainContainerC">
          <div className="mainContainer">
            <div className="passwordGenerator">
              <a href="http://localhost:3000/generator">Password Generator</a>
            </div>
            <div className="passwordManager">
              <a href="http://localhost:3000/passknight">Password Manager</a>
            </div>
            <div className="passwordStrChecker">
              <a href="http://localhost:3000/strength">Password Strength Checker</a>
            </div>
          </div>
        </div>
    )
}

export default Main