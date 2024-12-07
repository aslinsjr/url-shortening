import { useState } from 'react'

import Header from './components/Header'
import Banner from './components/Banner'
import UrlInput from './components/UrlInput'
import Footer from './components/Footer'
import Statistics from './components/Statistics'
import CallToAction from './components/CallToAction'


import './App.css'

function App() {

  function handleClick() {
    document.querySelector("#url-input").focus()
  }

  return (
    <div className="app">
      <div className="inner-app">
        <section>
          <Header />
          <Banner handleClick={handleClick} />
        </section>
        <UrlInput />
        <Statistics />
      </div>
      <CallToAction handleClick={handleClick} />
      <Footer />
    </div>
  )
}

export default App
