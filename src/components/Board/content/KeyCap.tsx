import React from 'react'
import styles from '../styles'

interface KeyCapProps {
  guessedLetter: string | undefined
  letter: string
}
const KeyCap: React.FC<KeyCapProps> = (props) => {

  const {
    guessedLetter,
    letter
  } = props
  
  return (
    <styles.KeyCap color={letter === ' ' ? guessedLetter === ' ' ? 'green' : 'yellow' : letter === guessedLetter ? 'green' : 'grey'}>
      {guessedLetter}
    </styles.KeyCap>
  )
}

export default KeyCap