import React from 'react'
import content from './'
import funcs from '../functions'
import styles from '../styles'

interface KeyRowProps {
  guessedWord: string | undefined
  space: boolean
  word: string
}

const KeyRow: React.FC<KeyRowProps> = (props) => {

  const {
    guessedWord,
    space,
    word
  } = props

  const amountOfKeys = word.split('').length
  const guessedLetters = guessedWord ? guessedWord.split('') : undefined
  
  return (
    <styles.KeyRow columns={JSON.stringify(space ? amountOfKeys + 1 : amountOfKeys)}>
      {funcs.generateLetters(word, space).map((letter, index) => <content.KeyCap key={`KeyCap-${index}-${letter}`} letter={letter} guessedLetter={guessedLetters ? guessedLetters[index] : undefined} />)}
    </styles.KeyRow>
  )
}

export default KeyRow