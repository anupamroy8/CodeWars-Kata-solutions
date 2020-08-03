function name(n) {
  let count = 0;
  n.toString(2)
    .split("")
    .forEach((a) => {
      a == 1 ? count++ : count;
    });
  return count;
}

//

function arrayDiff(a, b) {
  return a.filter((c) => !b.includes(c));
}
// alt
function array_diff(a, b) {
  return a.filter(function (x) {
    return b.indexOf(x) == -1;
  });
}

//
function validate(password) {
  let regEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
  return regEx.test(password);
}

//
function high(x) {
  let strArr = x.split(" ");
  let lengthArr = [];
  for (let i = 0; i < strArr.length; i++) {
    lengthArr[i] = strArr[i]
      .split("")
      .reduce((acc, curr) => acc + curr.charCodeAt(0) - 96, 0);
  }
  let maxLen = Math.max(...lengthArr);
  let index = lengthArr.indexOf(maxLen);
  return strArr[index];
}
// alt
function high(x) {
  //transform the input string into array & define a string of alphabetical latin characters
  var arr = x.split(" ");
  var str = "abcdefghijklmnopqrstuvwxyz";
  //Iterate through the array with input words to find the one with the greatest sum
  var newArr = arr.map(function (word) {
    var sum = 0;
    for (var i = 0; i < word.length; i++) {
      sum += str.indexOf(word[i]);
    }
    return sum;
  });
  //Return the word with the greatest sum
  return arr[newArr.indexOf(Math.max(...newArr))];
}
// alt
function high(s) {
  let as = s
    .split(" ")
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(" ")[as.indexOf(Math.max(...as))];
}
// alt
const { compose, reduce, split } = require("ramda");

const score = compose(
  reduce((r, v) => r + v.charCodeAt() - 96, 0),
  split("")
);

const high = compose(
  reduce((r, v) => (score(v) > score(r) ? v : r), ""),
  split(" ")
);
// alt
function high(words) {
  const alpha = " abcdefghijklmnopqrstuvwxyz";
  const score = (word) =>
    word.split("").reduce((a, b) => a + alpha.indexOf(b), 0);

  return words
    .split(" ")
    .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
    .sort((a, b) => a.score - b.score || b.pos - a.pos)
    .pop().word;
}
