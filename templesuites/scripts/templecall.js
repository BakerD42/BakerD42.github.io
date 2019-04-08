let templeRequest = new XMLHttpRequest();
templeRequest.open ('GET', "/scripts/temples.json",true);
templeRequest.send();


templeRequest.onload = function () {
    var templeData = JSON.parse(templeRequest.responseText);
    console.log(templeData);

    document.getElementById("current-temp").innerHTML = templeData.main.temp;
    // name containers and place containters in various areas of site page
}