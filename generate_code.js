// define pickUp function to randomly return a item in an array
function pickUp(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateCode() {
  // define characters
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const allCharacters = [lowerCaseLetters, upperCaseLetters, numbers]

  // create a collection to store all characters
  let collection = []
  allCharacters.forEach(characters => collection = collection.concat(characters.split('')))

  // start generating code
  let code = ''
  for (let i = 0; i < 5; i++) {
    code += pickUp(collection)
  }

  // return the code
  return code
}

module.exports = generateCode
