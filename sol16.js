let convertToCelsius = function (F) {
  var celsius = (F - 32) * (5 / 9);
  return temperature;
};

function weatherInfo(temp) {
  var c = convertToCelsius(temp);
  if (c > 0) return c + " is above freezing temperature";
  else return c + " is freezing temperature";
}
