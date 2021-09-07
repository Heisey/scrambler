import React from 'react'
import components from '../../components'
import hooks from '../../hooks'
import funcs from './functions'
import styles from './styles'

const Landing = () => {

  const [sentence, sentenceHandler] = hooks.useState<string | undefined>()
  const [scrambledSentence, scrambledSentenceHandler] = hooks.useState('')
  const [score, scoreHandler] = hooks.useState(0)
  
  const startGame = async (iteration: number) => {
      try {
        if (iteration === 10) {
          return
        }
        const apiSentence = await funcs.fetchData(iteration)
        sentenceHandler(apiSentence)
        scrambledSentenceHandler(funcs.scrambleSentence(apiSentence))
      } catch (err) {
        console.log(err)
      }
    }

    hooks.useEffect(() => {
      startGame(score + 1)
    }, [])

    const handleScore = () => {
      scoreHandler(score + 1)
    }

    const restart = () => {
      scoreHandler(0)
      startGame(1)
    }

  return (
    <styles.Landing>
      <styles.contentContainer>
        {(sentence && score < 10) && (
          <components.Board 
            scoreHandler={handleScore} 
            score={score} 
            startGame={startGame} 
            sentence={sentence} 
            scrambledSentence={scrambledSentence} 
          />
        )}
        {score === 10 && (
          <styles.winnerMessage>
            You Won
            <components.Button
              onClick={restart}
            >
              restart Game
            </components.Button>
          </styles.winnerMessage>
        )} 
      </styles.contentContainer>
    </styles.Landing>
  )
}

export default Landing