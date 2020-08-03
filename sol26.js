// rock paper scissors
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};
// alt
const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  }
  return `Player ${
    /rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2
  } won!`;
};
// alt
const rps = (p1, p2) => {
  if (p1 == p2) return "Draw!";
  if (p1 == "rock" && p2 == "scissors") return "Player 1 won!";
  else if (p1 == "scissors" && p2 == "paper") return "Player 1 won!";
  else if (p1 == "paper" && p2 == "rock") return "Player 1 won!";
  else return "Player 2 won!";
};

//
function correct(string) {
  return string
    .split("")
    .map((s) => {
      switch (s) {
        case "5":
          return "S";
        case "1":
          return "I";
        case "0":
          return "O";

        default:
          return s;
      }
    })
    .join("");
}
// alt
const corrections = {
  "5": "S",
  "0": "O",
  "1": "I",
};

const correct = (string) =>
  string.replace(/[501]/g, (character) => corrections[character]);
// alt
function correct(string) {
  return string.replace(/0/g, "O").replace(/5/g, "S").replace(/1/g, "I");
}
// alt
const correct = (string) =>
  string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");

//   alt

function switchItUp(number) {
  //Write your own Code!
  switch (number) {
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
  }
}
//
function hexStringToRGB(hexString) {
  let arr = hexString.split("").splice(1);
  arr = arr.join("");
  let newArr = {
    r: parseInt(arr[0] + arr[1], 16),
    g: parseInt(arr[2] + arr[3], 16),
    b: parseInt(arr[4] + arr[5], 16),
  };
  return newArr;
}
//
function strCount(str, letter) {
  //code here
  str
    .split("")
    .reduce((total, char) => (char === letter ? total + 1 : total), 0);
}
// alt
function strCount(str, letter) {
  return str.split(letter).length - 1;
}
//Vowel remove
var removeVowels = function (str) {
  return str.replace(/[aeiou]/g, "");
};
// CtoF
function convertCF(num, scale) {
  //code here
  if (scale == "f") return (valNum - 32) / 1.8;
  else if (scale == "c") return (num - 32) / 1.8;
  else return;
}
