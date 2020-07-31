function solution(number) {
  let sumArr = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 || i % 5) {
      sumArr.push(i);
    } else return;
  }
  let removedDuplicates = new Set(sumArr);
  return removedDuplicates.reduce((a, b) => a + b, 0);
}
