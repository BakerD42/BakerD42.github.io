let templeRequest = new XMLHttpRequest();
templeRequest.open ('GET', "../templesuites/json/temples.json",true);
templeRequest.send();
//retrieve temple JSON data


templeRequest.onload = function () {
    var templeData = JSON.parse(templeRequest.responseText);
    console.log(templeData);
    // var denverdescription = document.getElementById("denverdescription").nodeValue;

    document.getElementById("denverdescription").innerHTML = templeData.temples.denverservices;
    document.getElementById("denverservices").innerHTML = denverservices;
    // name containers and place containters in various areas of site page
}