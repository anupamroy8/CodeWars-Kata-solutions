function getDrinkByProfession(param) {
  switch (param.toLowerCase()) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";

    default:
      return "Beer";
  }
}

// Alt
const drinks = {
  jabroni: "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  programmer: "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  politician: "Your tax dollars",
  rapper: "Cristal",
};

// Alt
function getDrinkByProfession(param) {
  param = param.toLowerCase();

  switch (param) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer";
  }
}
