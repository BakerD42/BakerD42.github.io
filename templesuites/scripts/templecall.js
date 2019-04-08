let templeRequest = new XMLHttpRequest();
templeRequest.open ('GET', "../templesuites/json/temples.json",true);
templeRequest.send();
//retrieve temple JSON data


templeRequest.onload = function () {
    var templeData = JSON.parse(templeRequest.responseText);
    console.log(templeData);

    document.getElementById("denverdescription").innerHTML = templeData.denverdescription;
    // name containers and place containters in various areas of site page
}