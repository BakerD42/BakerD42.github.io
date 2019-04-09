var section = document.querySelector('section');

var retrieveTemple = '../templesuites/json/temples.json'
let templeRequest = new XMLHttpRequest();

templeRequest.open ('GET', retrieveTemple);
templeRequest.responseType = 'json';
templeRequest.send();

templeRequest.onload = function () {
    var templeData = JSON.parse(templeRequest.response);
    showTemples(templeData);
}

function showTemples(jsonObj) {
    var templeData = jsonObj['temples'];

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

myName.textContent = templeData[i].myName;
myLocate.textContent = templeData[i].myLocate;
myClosures.textContent = templeData[i].myClosures;
myServices.textContent = templeData[i].myServices;
myDescription.textContent = templeData[i].myDescription;

var services = templeData[i].services;
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
//for (var i = 0; i < templeData.length; i++){
    //var description = document.createElement('description');
    

//document.getElementById("denverdescription").innerHTML = description;
//section.appendChild(description);
//}
    // document.getElementById("denverservices").innerHTML = services.service;
    // name containers and place containters in various areas of site page
//}