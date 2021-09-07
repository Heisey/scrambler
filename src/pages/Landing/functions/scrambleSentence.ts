import funcs from './'

const scrambleSentence = (sentence: string) => {
  const words: string[] = sentence.toLowerCase().split(' ')
  const scrambledWords = words.map(el => funcs.scrambleWord(el))
  return scrambledWords.join(' ')
}

export default scrambleSentence