var retrieveTemple = '../templesuites/json/temples.json'
let templeRequest = new XMLHttpRequest();
templeRequest.open ('GET', retrieveTemple);
templeRequest.send();
//retrieve temple JSON data


templeRequest.onload = function () {
    var templeData = JSON.parse(templeRequest.responseText);
    console.log(templeData);
    // var denverdescription = document.getElementById("denverdescription").nodeValue;

for (var i = 0; i < templeData.length; i++){
    var description = document.createElement('description');
    

document.getElementById("denverdescription").innerHTML = templeData.description;
section.appendChild(description);
}
    // document.getElementById("denverservices").innerHTML = services.service;
    // name containers and place containters in various areas of site page
}