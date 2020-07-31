function expressionMatter(a, b, c) {
  let resultArr = [a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c];
  return Math.max(...resultArr);
}

// Alt

function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));
}

//Alt
function expressionMatter(a, b, c) {
  let arr = [];
  arr.push(a + b + c);
  arr.push(a * b * c);
  arr.push(a + b * c);
  arr.push(a * b + c);
  arr.push((a + b) * c);
  arr.push(a * (b + c));
  return arr.reduce((a, b) => Math.max(a, b));
}
