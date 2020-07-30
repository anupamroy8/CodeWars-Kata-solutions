// Beginner Series #1 School Paperwork
function paperwork(n, m) {
    if (m < 0 || n < 0) {
      return 0;
    }
    return m * n;
  }

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

String.prototype.toAlternatingCase = function () {
    var newWord = "";
    for(let i = 0; i < this.length; i++ ) {
      if(this[i] === this[i].toLowerCase()) {
        newWord += this[i].toUpperCase();
      } else { 
        newWord += this[i].toLowerCase();
      }
    }
  return newWord;
}
// Alternate
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

function hasLowerCase(str) { return str ? (/[A-Z]/.test(str)) : false; }