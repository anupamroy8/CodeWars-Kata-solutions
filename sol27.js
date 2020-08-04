function doubles(maxk, maxn) {
  let result = 0;
  for (let k = 1; k <= maxk; k++) {
    for (let n = 1; n <= maxn; n++) {
      result += 1 / (k * Math.pow(n + 1, 2 * k));
    }
  }
  return result;
}

// alt
function doubles(maxk, maxn) {
  var s = 0;
  for (var k = 1; k <= maxk; ++k) for (var n = 1; n <= maxn; ++n) s += v(k, n);
  return s;
}

function v(k, n) {
  return 1 / (k * Math.pow(n + 1, 2 * k));
}
//

function sumStrings(a, b) {
  let aArr = a.split("");
  let bArr = b.split("");
  let result = [];
  for (let i = 0; i < aArr.length; i++) {
    result[i] = +aArr[i] + bArr[i];
  }
  return result;
}

// snail sorting
snail = function (array) {
  let arr = array;
  let snailOutput = [];

  while (arr.length > 0) {
    const firstRow = arr[0];
    snailOutput = snailOutput.concat(firstRow);
    arr.shift();
    if (arr[0]) {
      arr = arr[0].map((col, i) => arr.map((row) => row[row.length - 1 - i]));
    }
  }
  return snailOutput;
};

//
function powersOfTwo(n) {
  result = [];
  for (let i = 0; i < n; i++) {
    result.push(2 ** i);
  }
  return [];
}

//
