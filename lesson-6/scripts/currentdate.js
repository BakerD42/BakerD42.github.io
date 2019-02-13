//Create a self updating copyright date
var date = new Date();
document.getElementById('copyright-year').innerHTML = date.getFullYear();

var weekday = new Array(7);
weekday[0] = "Sunday";



var monthName = new Array(12);
month[0] = "January";


var fullyear = today.getFullYear();



console.log(today);


var fulldate = weekday + ", " +
    today.getdate() + " " + 
    monthName + " " fullyear;
