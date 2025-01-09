import { useState } from 'react'

import Header from './components/Header'

import './App.css'
import StatusSection from './components/StatusSection'
import LanguagesList from './components/LanguagesList'
import Keyboard from './components/Keyboard'


function App() {

  const [currentWord, setCurrentword] = useState("react")

  const letters = currentWord.split("").map((letter, index) => {

    for (let i = 0; i < currentWord.length; i++) {
      return (
        <span key={index} className='letter' >{letter.toUpperCase()}</span>
      )
    }

  })

  return (
    <main>
      <Header />
      <StatusSection />
      <LanguagesList />
      <section className='letter-container'>{letters}</section> 
      <Keyboard />
      <section>
        <button className='btn'>New Game</button>
      </section>
    </main>

  )
}

export default App
