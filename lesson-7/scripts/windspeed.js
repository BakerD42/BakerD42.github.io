var temp = 50;
var windSpeed = 10;
var windChill = (35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16));

document.getElementById("temp").innerHTML = temp + '&deg;';
document.getElementById("windSpeed").innerHTML = windSpeed + ' mph;';
document.getElementById("windChill").innerHTML = windChill + '&deg;';