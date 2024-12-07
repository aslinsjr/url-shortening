import "./UrlInput.css"

import axios from "axios"

import { useState } from "react"

const UrlInput = () => {

  const [url, setUrl] = useState("")
  const [shortUrls, setShortUrls] = useState([])

  async function getShortening(url) {
    try {
      const response = await axios.post("https://url-shortening-api-gray.vercel.app/url", {
        url: url
      })

      setShortUrls(prevList => [...prevList, [url, response.data.result_url]])

      document.querySelector("#url-input").value = ""

    } catch (error) {
      console.log(error)
    }
  }

  async function copyUrl(url) {
    try {
      await navigator.clipboard.writeText(url)

    } catch(error) {
      console.log(error)
    }
  }

  return (<div className="url-container">
    <div class="input-control">
      <input id="url-input" type="text" onChange={(e) => setUrl(e.target.value)} placeholder="Shorten a link here..." />
      <button id="shorten-btn" onClick={() => getShortening(url)}>Shorten It!</button>
    </div>
    <div className="show-urls">
      {shortUrls.map((shortUrl) => {
        return (
        <div className="url-box" key={shortUrl[0]}>
          <p>{shortUrl[0]}</p>
          <div className="right-side">
          <a href={shortUrl[1]} target="_blank">{shortUrl[1]}</a>
          <button onClick={() => copyUrl(shortUrl[1])}>Copy</button>
          </div>
        </div>)
      })}
    </div>
    </div>)
}

export default UrlInput