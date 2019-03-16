var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?' + 'id=7a7bd0cc92fa44b75a7c863f9ba055a4'
let weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = weatherRequest.response;

    document.getElementById("current-temp").innerHTML = weatherData.main.temp;
}