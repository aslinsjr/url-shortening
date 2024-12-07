import './CallToAction.css'

const CallToAction = ({handleClick}) => {
  return (
    <div class="bottom-container">
      <h2>Boost your links today</h2>
      <button onClick={() => handleClick()}>Get Started</button>
    </div>
  )
}

export default CallToAction