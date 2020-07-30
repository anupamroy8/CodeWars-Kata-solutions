function rentalCarCost(d) {
  // Your solution here
  if (d < 3) return d * 40;
  else if (3 <= d < 7) return d * 40 - 20;
  else return d * 40 - 50;
}

var countSheep = function (num) {
  //your code here
  let str = "";
  for (let i = 1; i <= num; i++) {
    str = str.concat(`${i} sheep...`);
  }
  return str;
};
