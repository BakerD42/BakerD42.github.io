let templeRequest = new XMLHttpRequest();
templeRequest.open ('GET', "../templesuites/json/temples.json",true);
templeRequest.send();


templeRequest.onload = function () {
    var templeData = JSON.parse(templeRequest.responseText);
    console.log(templeData);

    document.getElementById("denverdescription").innerHTML = dendescription;
    // name containers and place containters in various areas of site page
}