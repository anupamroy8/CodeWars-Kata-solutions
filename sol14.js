function countDevelopers(list) {
  // your awesome code here :)
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[0].continent.toLowerCase()=== "europe") {
      count = count + 1;
    }
  }
  return count;
}
