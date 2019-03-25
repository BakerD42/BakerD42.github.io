
var apiForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?zip=94040,us&appid=7a7bd0cc92fa44b75a7c863f9ba055a4&units=imperial';

var forecastRequest = new XMLHttpRequest();
forecastRequest.open('GET', apiForecastUrl, true);
forecastRequest.responseType = 'json';
forecastRequest.send();

forecastRequest.onload = function () {
    var forecastData = forecastRequest.response;
    
    // create variables to use in the loop below
    var j = 1;
    var forecastDate;
    var forecastTemp;

    for (i = 0; i < forecastData.list.length; i++)
    {
        // look for forecasts for 21:00:00
        if (forecastData.list[i].dt_txt.includes('21:00:00')) {
            // set date variable
            forecastDate = new Date(forecastData.list[i].dt_txt);
            
            // set temperature variable
            forecastTemp = forecastData.list[i].main.temp.toFixed();
            
            switch (j) {
                case 1:
                    document.getElementById("day1Name").innerHTML = getDayOfWeek(forecastDate);
                    document.getElementById("day1Temp").innerHTML = forecastTemp;
                    break;
                case 2:
                    document.getElementById("day2Name").innerHTML = getDayOfWeek(forecastDate);
                    document.getElementById("day2Temp").innerHTML = forecastTemp;
                    break;
                case 3:
                    document.getElementById("day3Name").innerHTML = getDayOfWeek(forecastDate);
                    document.getElementById("day3Temp").innerHTML = forecastTemp;
                    break;
                case 4:
                    document.getElementById("day4Name").innerHTML = getDayOfWeek(forecastDate);
                    document.getElementById("day4Temp").innerHTML = forecastTemp;
                    break;
                case 5:
                    document.getElementById("day5Name").innerHTML = getDayOfWeek(forecastDate);
                    document.getElementById("day5Temp").innerHTML = forecastTemp;
                    break;
            }

            // increment j by 1
            j++;
        }
    }
}
    
function getDayOfWeek(forecastDate) {
    // day of week
    var dayOfWeekNumber = forecastDate.getDay();

    var dayNames = new Array(7);
    dayNames[0] = 'Sunday';
    dayNames[1] = 'Monday';
    dayNames[2] = 'Tuesday';
    dayNames[3] = 'Wednesday';
    dayNames[4] = 'Thursdsay';
    dayNames[5] = 'Friday';
    dayNames[6] = 'Saturday';

    return dayNames[dayOfWeekNumber];
}
