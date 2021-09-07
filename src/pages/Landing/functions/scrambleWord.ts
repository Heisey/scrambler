
  const scrambleWord = (word: string) => {
    if (word.length <= 2) return word

    const letters = word.split('')
    const firstLetter = letters.shift()
    const lastLetter = letters.pop()
    
    const lettersLength = letters.length

    if (firstLetter === undefined || lastLetter === undefined) return word

    for(let i = lettersLength - 1; i > 0; i--) {
      const randomNumber = Math.floor(Math.random() * (lettersLength + 1))
      const temp = letters[i]
      letters[i] = letters[randomNumber]
      letters[randomNumber] = temp
    }

    letters.unshift(firstLetter)
    letters.push(lastLetter)
    return letters.join('')
  }

  export default scrambleWord