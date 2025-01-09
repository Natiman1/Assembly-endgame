import { useState } from 'react'
import clsx from 'clsx';

import Header from './components/Header'

import './App.css'
import StatusSection from './components/StatusSection'
import LanguagesList from './components/LanguagesList'


function App() {
  // stet values
  const [currentWord, setCurrentword] = useState("react")
  const [userGuess, steUserGuess] = useState([])

  //derived values
  const wrongGuesseCount = userGuess.filter((letter) => !currentWord.includes(letter)).length
  console.log(wrongGuesseCount)

  //Static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  function guessedLetters(letter) {
    steUserGuess(userGuess =>
      userGuess.includes(letter) ? userGuess : [...userGuess, letter]
    )
  }

  const keybord = alphabet.split("").map((letter) => {
    const isGuessed = userGuess.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)
    const isWrong = isGuessed && !currentWord.includes(letter)

    return (
      <button
        key={letter}
        className={clsx('keys', {
          green: isCorrect,
          red: isWrong,
        })}
        onClick={() => guessedLetters(letter)}
      >{letter.toUpperCase()}</button>
    )

  })

  const letters = currentWord.split("").map((letter, index) => {
    return (
      <span key={index} className='letter' >{userGuess.includes(letter) ? letter.toUpperCase() : ""}</span>
    )


  })

  return (
    <main>
      <Header />
      <StatusSection />
      <LanguagesList />
      <section className='letter-container'>{letters}</section>
      <section className="keyboard">{keybord}</section>
      <section>
        <button className='btn'>New Game</button>
      </section>
    </main>

  )
}

export default App
