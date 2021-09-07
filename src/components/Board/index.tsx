import React from 'react'
import components from '..'
import hooks from '../../hooks'
import content from './content'
import styles from './styles'

interface BoardProps {
  score: number
  scrambledSentence: string
  sentence: string
  startGame(iteration: number): void
  scoreHandler(): void
}

const Board: React.FC<BoardProps>  = (props) => {

  const {
    score,
    scoreHandler,
    scrambledSentence,
    sentence,
    startGame
  } = props

  const [userGuess, userGuessHandler] = hooks.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    userGuessHandler(e.target.value)
  }

  const restartGame = () => {
    startGame(score + 2)
    scoreHandler()
    userGuessHandler('')
  }

  return (
    <styles.Board>
      <styles.largeText
        color='#25528F'
      >
      {scrambledSentence}
      </styles.largeText>
      <styles.smallText>
        Guess the sentence! Star typing
      </styles.smallText>
      <styles.smallText>
        The yellow blocks are meant for spaces
      </styles.smallText>
      <styles.largeText
        color='black'
      >
        SCORE: {score}
      </styles.largeText>
      <styles.hiddenInput 
        hide={userGuess === sentence ? 'true' : 'false'}
        value={userGuess}
        onChange={handleChange}
      />
      <content.KeyBoard 
        sentence={sentence}
        userGuess={userGuess}
      />
      {sentence === userGuess && <styles.buttonContainer> <components.Button onClick={restartGame}>Next</components.Button></styles.buttonContainer>}
    </styles.Board>
    

  )
}

export default Board