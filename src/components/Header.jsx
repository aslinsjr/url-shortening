import './Header.css'

const Header = () => {
  return (
    <header>
    <div className="left-header">
      <img src="/logo.svg" alt="Logo"/>
      <nav>
        <ul>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
      </nav>
    </div>
    <div class="login-container">
      <button id="login-btn">Login</button>
      <button id="sing-up">Sign Up</button>
    </div>
  </header>
  )
}

export default Header