function ufcWord() {
  let word = getTextInputValue();
  let newWord = "";
  let previous = newWord;

  for (let char of word) {
    if (previous === " " || previous === "") {
      newWord += toUpperCase(char);
    } else {
      newWord += char;
    }
    previous = char;
  }
  setOutputDisplay(newWord);
}

function ulcWord() {
  let word = getTextInputValue();
  let newWord = "";
  let previous = newWord;

  for (let i = word.length - 1; i >= 0; i--) {
    if (previous === " " || previous === "") {
      newWord = toUpperCase(word[i]) + newWord;
    } else {
      newWord = word[i] + newWord;
    }
    previous = word[i];
  }
  setOutputDisplay(newWord);
}

let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function toUpperCase(char) {
  for (let i = 0; i < lowerCaseLetters.length; i++) {
    if (char === lowerCaseLetters[i]) {
      return upperCaseLetters[i];
    }
  }
  return char;
}

function reverseString() {
  let word = getTextInputValue();
  let newWord = "";

  for (let char of word) {
    newWord = char + newWord;
  }
  setOutputDisplay(newWord);
}

function clearFields() {
  let txtInput = document.getElementById("txtInput");
  txtInput.value = "";
  setOutputDisplay("");
}

function getTextInputValue() {
  let txtInput = document.getElementById("txtInput");
  return txtInput.value;
}

function setOutputDisplay(word) {
  let pOutput = document.getElementById("pOutput");
  pOutput.textContent = word;
}
