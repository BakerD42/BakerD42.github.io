
//Attempt at recreating Town JSON data retrieval
var section = document.querySelector('section');

var retrieveTemple = '../templesuites/json/temples.json'
let templeRequest = new XMLHttpRequest();

templeRequest.open ('GET', retrieveTemple);
templeRequest.responseType = 'json';
templeRequest.send();

templeRequest.onload = function () {
    var templeData = templeRequest.response;
    showTemples(templeData);
}

function showTemples(jsonObj) {
    var templeData = jsonObj['temples'];

    //for (var i = 0; i < templeData; i++) {}
    var name = document.createElement('name');
    name.className += "templeName";
    var myLocate = document.createElement('location');
    myLocate.className += "templeLocate";
    var myClosures = document.createElement('closures');
    myClosures.className += "templeClosure";
    var myServices = document.createElement('services');
    myServices.className += "templeService";
    var myDescription = document.createElement('description');
    myDescription.className += "templeDescription";

    name.textContent = templeData.name;
    myLocate.textContent = templeData.myLocate;
    myClosures.textContent = templeData.myClosures;
    myServices.textContent = templeData.myServices;
    myDescription.textContent = templeData.myDescription;

    var services = templeData[i].services;
    for (var j = 0; j < services.length; j++) {
    var listItem = document.createElement('li');
    listItem.textContent = services[j];
    myServices.appendChild(listItem);
}

name.appendChild(myLocate);
name.appendChild(myClosures);
name.appendChild(myServices);
name.appendChild(myDescription);

section.appendChild(name);
}