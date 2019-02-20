var temp = 50;
var windspeed = 10;

var windChill = 35.74 + 0.6215 *
temp - 35.75 * Math.pow(windspeed, 0.16) 
+ 0.4275 * temp *Math.pow(windspeed, 0.16);

document.getElementById("temp").innerHTML = temp + '&deg;';
document.getElementById("windspeed").innerHTML = windspeed + ' mph;';
document.getElementById("windchill").innerHTML = windChill + '&deg;';