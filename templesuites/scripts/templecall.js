let templeRequest = new XMLHttpRequest();
templeRequest.open ('GET', "../templesuites/json/temples.json",true);
templeRequest.send();
//retrieve temple JSON data


templeRequest.onload = function () {
    var templeData = JSON.parse(templeRequest.responseText);
    console.log(templeData);
    var denverdescription = document.getElementById("denverdescription").value;

    document.getElementById("denverdescription").innerHTML = denverdescription;
    document.getElementById("denverservices").innerHTML = denverservices;
    // name containers and place containters in various areas of site page
}