const generateLetters = (word: string, space: boolean) => {
  const letters = word.split('')

  if (space) {
    letters.push(' ')
  }

  return letters
}

export default generateLetters