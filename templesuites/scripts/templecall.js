
//Attempt at recreating Town JSON data retrieval
var section = document.querySelector('section');

var templeURL = '../templesuites/json/temples.json'
var templeRequest = new XMLHttpRequest();

templeRequest.open ('GET', templeURL);
templeRequest.responseType = 'json';
templeRequest.send();

templeRequest.onload = function () {
    var templeData = templeRequest.response;
    console.log(templeData);
    showTemples(templeData);
}

function showTemples(jsonObj) {
    var templeData = jsonObj;

    // for (var i = 0; i < templeData; i++) {
    //     if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4){
    //         continue;
    //     }
    var i = 1;

    var myName = document.createElement('div');
    var myLocate = document.createElement('div');
    myLocate.className += "templeLocate";
    var myClosures = document.createElement('ul');
    myClosures.className += "templeClosure";
    var myServices = document.createElement('ul');
    myServices.className += "templeService";
    var myDescription = document.createElement('div');
    myDescription.className += "templeDescription";

    myName.textContent = templeData[i].name;
    myLocate.textContent = templeData[i].location;
    myClosures.textContent = templeData[i].closures;
    myServices.textContent = templeData[i].services;
    myDescription.textContent = templeData[i].description;

     var services = templeData[i].services;
     for (var j = 0; j < services.length; j++) {
     var listItem = document.createElement('li');
     listItem.textContent = services[j];
     myServices.appendChild(listItem);
    }

document.getElementById.appendChild("templeClosure");
// myName.appendChild(myLocate);
// myName.appendChild(myClosures);
// myName.appendChild(myServices);
// myName.appendChild(myDescription);

section.appendChild(myName);
}