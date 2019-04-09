
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

    for (var i = 0; i < templeData; i++) {
        if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4){
            continue;
        }
    

    var myName = document.createElement('name');
    myName.className += "templeName";
    var myLocate = document.createElement('location');
    myLocate.className += "templeLocate";
    var myClosures = document.createElement('closures');
    myClosures.className += "templeClosure";
    var myServices = document.createElement('services');
    myServices.className += "templeService";
    var myDescription = document.createElement('description');
    myDescription.className += "templeDescription";

    myName.textContent = templeDatai[i].myName;
    myLocate.textContent = templeData[i].myLocate;
    myClosures.textContent = templeData[i].myClosures;
    myServices.textContent = templeData[i].myServices;
    myDescription.textContent = templeData[i].myDescription;

     var services = templeData.services;
     for (var j = 0; j < services.length; j++) {
     var listItem = document.createElement('li');
     listItem.textContent = services[j];
     myServices.appendChild(listItem);
    }

myName.appendChild(myLocate);
myName.appendChild(myClosures);
myName.appendChild(myServices);
myName.appendChild(myDescription);

section.appendChild(myName);
}
}


