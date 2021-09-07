const generateGuessedWords = (words: string) => {
  const tempWords = words.split(' ')
  const adjustedWords = tempWords.map((word, index) => index !== tempWords.length - 1 ? word + ' ' : word)

  return adjustedWords
}

export default generateGuessedWords