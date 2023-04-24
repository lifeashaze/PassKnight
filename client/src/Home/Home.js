import './App.css';


function Home() {
  return (
    <div className="Home">
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
        <a className="try-btn" id="try-btn" href='http://localhost:3000/passknight'>Try it Out</a>
      </div>
    </section>
    <section className="features">
      <div className="features-imgs">
      <img src="https://cdn.discordapp.com/attachments/927466983031709716/1100150491708670023/Secure_Lineal-coloured.png" alt="" />
        <img src="https://cdn.discordapp.com/attachments/927466983031709716/1100149646900330597/Database_Security_Lineal-coloured.png" alt="" />
        <img src="https://cdn.discordapp.com/attachments/927466983031709716/1100150784932454470/icons8-lock.png" alt="" />
      </div>
      <div className="features-desc">
        <p>Data is encrypted using a symmetric encryption algorithm before being sent to the server.</p>
        <p>All the data stored in a secured MySQL Server.</p>
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
  </main>
  <footer>
    <h4 style={{color: 'gray', fontSize: '0.5rem'}}>~A Mini-Project made for Vishwakarma University~</h4>
  </footer>
</div>

    </div>
  );
}

export default Home;
