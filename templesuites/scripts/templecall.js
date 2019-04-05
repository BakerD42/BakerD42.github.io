var header = document.querySelector('header'); 
var section = document.querySelector('section'); 

var requestURL = "json/temples.json";
var request = new XMLHttpRequest(); 
//Calling json file

request.open('GET', requestURL); 
request.responseType = 'json'; 
request.send(); 

request.onload = function() { 
    var templeDesc = request.response; 
    showTemple(templeDesc); 
} 

function showTemple(jsonObj) { 
    var templeDesc = jsonObj['temples']; 
    
    var templeMain = document.createElement('article'); 
    var myH2 = document.createElement('h2'); 
    myH2.className += "name"; 
    var myPara1 = document.createElement('p'); 
    myPara1.className += "location";
    var myPara2 = document.createElement('p'); 
    myPara2.className += "closures";

    myH2.textContent = templeDesc[i].name; 
myPara1.textContent = 'Location: ' + templeDesc[i].location; 
myPara2.textContent = 'Upcoming Closures: ' + templeDesc[i].closures; 











templeMain.appendChild(myH2); 
templeMain.appendChild(myPara1); 
templeMain.appendChild(myPara2); 
templeMain.appendChild(myPara3); 


section.appendChild(myArticle); 
 
}

