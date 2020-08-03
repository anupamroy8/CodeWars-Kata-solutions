function well(x) {
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      count = count + 1;
    }
  }
  if (countGood === 0) return "Fail!";
  else if (countGood < 3) return "Publish!";
  else return "I smell a series!";
}
// easy alt
const well = (x) => {
  const good_count = x.filter((x) => x == "good").length;
  return good_count < 1
    ? "Fail!"
    : good_count < 3
    ? "Publish!"
    : "I smell a series!";
};
// alt
function well(x) {
  var good = 0;

  for (var i = 0; i < x.length; ++i)
    if (x[i] == "good" && ++good > 2) return "I smell a series!";

  return good ? "Publish!" : "Fail!";
}
// alt
function well(x) {
  switch (x.filter((i) => i === "good").length) {
    case 0:
      return "Fail!";
    case 1:
    case 2:
      return "Publish!";
    default:
      return "I smell a series!";
  }
}
