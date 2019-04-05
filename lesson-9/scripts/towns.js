var header = document.querySelector('header'); 
var section = document.querySelector('section'); 


var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'; 


var request = new XMLHttpRequest(); 


request.open('GET', requestURL); 
request.responseType = 'json'; 
request.send(); 

request.onload = function() { 
var townData = request.response; 
// populateHeader(townData); 
showTown(townData); 
} 

// function populateHeader(jsonObj) { 
// var myH1 = document.createElement('h1'); 
// myH1.textContent = jsonObj['name']; 
// section.appendChild(myH1); 
// } 

function showTown(jsonObj) {   
  var townData = jsonObj['towns']; 

  for (var i = 0; i < townData.length; i++) {
  if (i === 0 || i === 2 || i === 3  || i === 6){
    continue;
  } 
  var myArticle = document.createElement('article'); 
  var myH2 = document.createElement('h2'); 
  myH2.className += "townheader"; 
  var myPara1 = document.createElement('p'); 
  myPara1.className += "townpara";
  var myPara2 = document.createElement('p'); 
  myPara2.className += "townpara";
  var myPara3 = document.createElement('p'); 
  myPara3.className += "townpara";
  var myList = document.createElement('ul'); 
  myList.className += "townevent";

  
  myH2.textContent = townData[i].name; 
  myPara1.textContent = 'Year Founded: ' + townData[i].yearFounded; 
  myPara2.textContent = 'Current Population: ' + townData[i].currentPopulation; 
  myPara3.textContent = 'Events: '; 

  var events = townData[i].events; 
  for (var j = 0; j < events.length; j++) { 
  var listItem = document.createElement('li'); 
  listItem.textContent = events[j]; 
  myList.appendChild(listItem); 
} 

var myimage = document.createElement('img');
myimage.classname += "townimage";
if(townData[i].name === 'Fish Haven') {
  myimage.src = "images/city1.jpg";
} else if (townData[i].name === "Preston"){
  myimage.src = "images/city2.jpg";
} else {
  myimage.src = "images/city3.jpg";
}

myArticle.appendChild(myH2); 
myArticle.appendChild(myPara1); 
myArticle.appendChild(myPara2); 
myArticle.appendChild(myPara3); 
myArticle.appendChild(myList); 
myArticle.appendChild(myimage);

section.appendChild(myArticle); 
} 
}