var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var townData = request.response;
  populateHeader(townData);
  showTown(townData);
}

function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['townName'];
  header.appendChild(myH1);

  function showTown(jsonObj) {
    var townData = jsonObj['towns'];
        
    for (var i = 0; i < townData.length; i++) {
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myList = document.createElement('ul');
  
      myH2.textContent = townData[i].townName;
      myPara1.textContent = 'Year Founded: ' + townData[i].yearFounded;
      myPara2.textContent = 'Current Population: ' + townData[i].currentPopulation;
      myPara3.textContent = 'Events: ';
          
      var events = townData[i].events;
      for (var j = 0; j < events.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = event[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }
}


/*var i = 0;
const townData = [
  {
    name: "Franklin",
    motto: "Where you will grow!",
    yearFounded: 1788,
    currentPopulation: 30458,
    averageRainfall: 21,
    events: [
      "March 4th: March of the Drum of Donuts",
      "Sept 5th - 11th: Founder Days",
      "December 1st - 26th: Christmas in the Heart"
    ]
    
  },
  {
    name: "Fish Haven",
    motto: "This is Fish Heaven",
    yearFounded: 1864,
    currentPopulation: 501,
    averageRainfall: 14.20,
    events: [
      "April 1st: How Big was that Fish Day",
      "May 15th-30th: Rush the Creek Days",
      "December 12: Light the Tree"
    ]
  },
  {
    name: "Greenville",
    motto: "Green is our way of life.",
    yearFounded: 1805,
    currentPopulation: 33458,
    averageRainfall: 25,
    events: [
      "February 10-12: Greenbration",
      "May 8th - 18th: Greenville Founder Days",
      "June 20th: Verde and Valiant Day",
      "November 15th - 16th Greensome Gathering"
    ]
  },
  {
    name: "Placerton",
    motto: "Positive Placement in Placerton.",
    yearFounded: 1946,
    currentPopulation: 512,
    averageRainfall: 39,
    events: [
      "July 4th: A Blaze of Glory",
      "October 20th: Fall through Fall"
    ]
  },
  {
    name: "Preston",
    motto: "Home of Napoleon Dynamite",
    yearFounded: 1866,
    averageRainfall: 16.65,
    events: [
      "March 29th: Work Creek Revival",
      "July 8th - 12th: Napolean Dynamite Festival",
      "November 2nd - 4th: Freedom Days"
    ]
  },
  { 
    name: "Soda Springs",
    motto: "Historic Oregon Trails Oasis. The Soda is on us",
    yearFounded: 1858,
    currentPopulation: 2985,
    averageRainfall: 15.75,
    events: [
      "February 29th: Geyser Song Day",
      "May 1st - 6th: Days of May Celebration",
      "October 15th - 16th: Octoberfest"
    ]
  },
    {
      name: "Springfield",
      motto: "Where everyone is lifted.",
      yearFounded: 1826,
      currentPopulation: 17852,
      averageRainfall: 17,
      events: [
        "January 8th: Spring into Winter",
        "April 10th - 20th: Celebration of Life",
        "July 31st - Aug 15th: Dog Days of Summer Festival"
      ]
    }
];         
for (var i = 0; i < townData.length; i++) {
  if (townData[i].name === 'Soda Springs'){ 
    document.write('<h2 class="townName">' + townData[i].name + '</h2>'),
    document.write('<h2 class="townName">' + townData[i].motto + '</h2>'),
    document.write('<h2 class="townName">' + townData[i].yearFounded + '</h2>'),
    document.write('<h2 class="townName">' + townData[i].currentPopulation + '</h2>'),
    document.write('<h2 class="townName">' + townData[i].averageRainfall + '</h2>');
  } else if (townData[i].name ==='Preston') {
    document.write('<h2 class="townName">' + townData[i].name + '</h2>'),
    document.write('<h2 class="townName">' + townData[i].motto + '</h2>'),
    document.write('<h2 class="townName">' + townData[i].yearFounded + '</h2>'),
    document.write('<h2 class="townName">' + townData[i].currentPopulation + '</h2>'),
    document.write('<h2 class="townName">' + townData[i].averageRainfall + '</h2>');
  } else if (townData[i].name ==='Fish Haven'){
    document.write('<h2 class="townName">' + townData[i].name + '</h2>'),
    document.write('<h2 class="townName">' + townData[i].motto + '</h2>'),
    document.write('<h2 class="townName">' + townData[i].yearFounded + '</h2>'),
    document.write('<h2 class="townName">' + townData[i].currentPopulation + '</h2>'),
    document.write('<h2 class="townName">' + townData[i].averageRainfall + '</h2>');
  }
  }*/