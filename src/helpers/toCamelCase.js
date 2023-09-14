// to change to camelCase ex: hello world => helloWorld
function toCamelCase(inputString) {
  return inputString
    .toLowerCase() // Convert the entire string to lowercase
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, character) => character.toUpperCase());
}

// to change every word of the text to camelCase ex: hello world => Hello World 
function capitalizeEveryWord(inputString) {
  return inputString.replace(/\b\w/g, (char) => char.toUpperCase());
}

// to change the first letter of word to upper case.
function capitalizeFirstLetter(inputString) {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

export { toCamelCase, capitalizeEveryWord,capitalizeFirstLetter}