import './Banner.css'

const Banner = ({handleClick}) => {
  return (
    <div id="main-banner">
      <div class="right-section">
        <h1>More than just shorter links</h1>
        <p>Build your brand’s recognition and get detailed insights
          on how your links are performing.
        </p>
        <button onClick={() => handleClick()}>Get Started</button>
      </div>
      <img src="/illustration-working.svg" alt="Working Ilustration" />
    </div>
  )
}

export default Banner