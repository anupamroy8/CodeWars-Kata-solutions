function sumMix(x) {
  return x.reduce((a, b) => Number(a) + Number(b), 0);
}

// Alt
function sumMix(x) {
  return x.map((a) => +a).reduce((a, b) => a + b);
}
// Alt
const sumMix = (x) => x.reduce((a, b) => +b + a, 0);

// Alt
function sumMix(x) {
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}
// Alt
const sumMix = (arr) => arr.reduce((sum, n) => sum + +n, 0);
