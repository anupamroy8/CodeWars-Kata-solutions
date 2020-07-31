function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

// Alt
const capitalizeWord = (word) =>
  word.replace(word.charAt(0), word.charAt(0).toUpperCase());

// Alt
const capitalizeWord = (word) => word[0].toUpperCase() + word.slice(1);

// Alt
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
