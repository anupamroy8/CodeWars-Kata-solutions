// removing trailing zeros
function noBoringZeros(n) {
  // your code
  return +n.toString().replace(/0+$/, "");
}

function checkForFactor(base, factor) {
  return base % factor === 0;
}

// Shark pantoon
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin) {
    sharkSpeed /= 2;
  }
  return pontoonDistance / youSpeed < sharkDistance / sharkSpeed
    ? "Alive!"
    : "Shark Bait!";
}

// nth even number
let url =
  "https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript";

function nthEven(n) {
  // your code here
  arr = [];
  for (let i = 0; arr.length < n; i++) {
    if (i % 2 == 0) arr.push(i);
  }
  return arr[arr.length - 1];
}

function nthEven(n) {
  return (n - 1) * 2;
}

// Decimal to binary
toBinary = (n) => parseInt(n.toString(2));

// alt
let toBinary = (n) => +n.toString(2);

// NaN
const isReallyNaN = (val) => {
  return Number.isNaN(val);
};

// safe Int
function SafeInteger(n) {
  return Number.isSafeInteger(n);
}

// power without Math.pow
function power(x, y) {
  return x ** y;
}

// without both above
function numberToPower(number, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result = result * number;
  }
  return result;
}

// alt
function numberToPower(number, power) {
  var total = 1;
  for (var i = 1; i <= power; i++) {
    total = total * number;
  }
  return total;
}

//
const twoDecimalPlaces = (n) => Number(n.toFixed(2));

//Note: toFixed returns string.
function twoDecimalPlaces(n) {
  return Math.round(n * 100) / 100;
}
// alt
function twoDecimalPlaces(n) {
  return +n.toFixed(2);
}

// Slope
function slope([x1, y1, x2, y2]) {
  let slope = (y2 - y1) / (x2 - x1);
  return Number.isFinite(slope) ? `${slope}` : "undefined";
}
