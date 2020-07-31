var isSquare = function (n) {
  if (Math.sqrt(n) % 1 === 0) {
    return true;
  } else return false;
};

// Alt
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// Alt
const isSquare = (n) => Number.isInteger(Math.sqrt(n));

// Alt
var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
};
