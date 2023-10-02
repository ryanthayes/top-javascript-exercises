const convertToCelsius = function(fahrenheit) {
  return Math.floor((fahrenheit - 32) * 5/9);
};

const convertToFahrenheit = function(celsius) {
  return Math.floor((celsius * 9/5) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

