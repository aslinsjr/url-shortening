import "./Statistics.css"

const Statistics = () => {
  return (
    <div id="advanced-statistics">
      <h2>Advanced Statistics
      <p>Track how your links are performing across the web with our
      advanced statistics dashboard.</p>
      </h2>
      
      <div class="statistics-container">
        <div class="statistic-box" id="brand-recognition">
          <img class="statistic-icon" src="./icon-brand-recognition.svg"
            alt="Brand Recognition Icon" />
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div class="statistic-box" id="detailed-records">
          <img class="statistic-icon"  src="./icon-detailed-records.svg"
            alt="Detailed Records Icon" />
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and where
            people engage with your content helps inform better decisions.
          </p>
        </div>
        <div class="statistic-box" id="fully-customizable">
          <img class="statistic-icon"  src="./icon-fully-customizable.svg"
            alt="Fully Customizable Icon" />
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through customizable
            links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Statistics