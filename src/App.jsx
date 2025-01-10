import { useState } from 'react'
import clsx from 'clsx';
import { getFarewellText } from '../utils'

import Header from './components/Header'

import './App.css'
import LanguagesList from './components/LanguagesList'
import { languages } from '../languages';


function App() {
  // stet values
  const [currentWord, setCurrentword] = useState("react")
  const [userGuess, steUserGuess] = useState([])

  //derived values
  const wrongGuesseCount = userGuess.filter((letter) => !currentWord.includes(letter)).length
  const isGameWon = currentWord.split("").every((letter) => userGuess.includes(letter))
  const isGameLost = wrongGuesseCount >= languages.length - 1
  const isGameOver = isGameWon || isGameLost

  const lastGuessedLetter = userGuess[userGuess.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)



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

  function renderStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
      return (<p className="farewell-text">{getFarewellText(languages[wrongGuesseCount - 1].name)} </p>)
    }
    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      )
    }
    if (isGameLost) {
      return (
        <>
          <h2>Game over!!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      )
    }
    return null
  }

  const letters = currentWord.split("").map((letter, index) => {
    return (
      <span
        key={index}
        className='letter' >
        {userGuess.includes(letter) ? letter.toUpperCase() : ""}
      </span>
    )


  })

  return (
    <main>
      <Header />
      <section className={clsx("status", {
        win: isGameWon,
        lose: isGameLost,
        farewell: !isGameOver && isLastGuessIncorrect
      })}>
        {renderStatus()}
      </section>
      <LanguagesList wrongGuesseCount={wrongGuesseCount} />
      <section className='letter-container'>{letters}</section>
      <section className="keyboard">{keybord}</section>
      <section>
        {isGameOver && <button className='btn'>New Game</button>}
      </section>
    </main>

  )
}

export default App
