function bmi(weight, height) {
  let value = weight / (height * height);

  if (value <= 18.5) return "Underweight";
  if (value <= 25.0) return "Normal";
  if (value <= 30.0) return "Overweight";
  if (value > 30) return "Obese";
}

// Alt
function bmi(weight, height) {
  var formula = weight / Math.pow(height, 2);
  switch (true) {
    case formula <= 18.5:
      return "Underweight";
    case formula <= 25.0:
      return "Normal";
    case formula <= 30:
      return "Overweight";
    default:
      return "Obese";
  }
}
// alt
function bmi(weight, height) {
  var bmi = weight / (height * height);

  return bmi < 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";
}

function removeEveryOther(arr) {
  //your code here
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr.splice(i);
    }
  }
}

function towerBuilder(nFloors) {
  // build here
  let result = [];
  let space, star;
  for (let i = 0; i < nFloors + 1; i++) {
    space = " ".repeat(nFloors - i);
    star = "*".repeat(2 * i - 1);
    result.push(`${space}${star}${space}`);
  }
  return result;
}

class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

peopleWithAgeDrink(30) === "drink whisky";
peopleWithAgeDrink(13) === "drink toddy";
peopleWithAgeDrink(17) === "drink coke";
peopleWithAgeDrink(18) === "drink beer";
peopleWithAgeDrink(20) === "drink beer";

function peopleWithAgeDrink(old) {
  switch (true) {
    case old < 14:
      return "drink toddy";
    case old < 18:
      return "drink coke";
    case old < 21:
      return "drink beer";
    default:
      return "drink whisky";
  }
}

function parseF(s) {
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

// Alt
const parseF = (s) => (isNaN(parseFloat(s)) ? null : parseFloat(s));
