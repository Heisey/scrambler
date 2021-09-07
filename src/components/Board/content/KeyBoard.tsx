import React from 'react'
import content from './'
import funcs from '../functions'
import styles from '../styles'

interface KeyBoardProps {
  sentence: string
  userGuess: string
}

const KeyBoard: React.FC<KeyBoardProps> = (props) => {
  
  const {
    sentence,
    userGuess
  } = props

  const words = sentence.split(' ')
  
  const guessedWords = funcs.generateGuessedWords(userGuess)

  return (
    <styles.KeyBoard rows={JSON.stringify(words.length)}>
      {words.map((word, index) => <content.KeyRow guessedWord={guessedWords[index]} key={`KeyRow-${index}`} word={word} space={words.length - 1 === index ? false : true} />)}
    </styles.KeyBoard>
  )
}

export default KeyBoard