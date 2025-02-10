// Convert Temperature (Celsius to Fahrenheit).

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  

  let tempInCelsius = 25;
  let tempInFahrenheit = celsiusToFahrenheit(tempInCelsius);
  console.log(tempInCelsius + "°C is " + tempInFahrenheit + "°F");
  
