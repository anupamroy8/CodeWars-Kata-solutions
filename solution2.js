// Abbreviate a Two Word Name
var name = ("Patrick Feenan");

function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }