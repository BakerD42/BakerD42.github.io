let weatherRequest = new XMLHttpRequest();
weatherRequest.open ('GET', '//api.openweathermap.org/data/2.5/weather?zip=80122,us&appid=7a7bd0cc92fa44b75a7c863f9ba055a4&units=imperial',true);
weatherRequest.send();


weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById("current-temp").innerHTML = weatherData.main.temp;
}