const dateTat = new Date(1671816600000);
const dateElement = document.getElementById("date");

var dateNow = new Date(); 
var dateDiff = new Date(dateNow - dateTat);
var years = dateDiff.getFullYear() - 1970; // Subtracting 1970 because unix time stuff
var months = dateDiff.getMonth();
var days = dateDiff.getDate() - 1;
var dateString;

// ~~~ Gart's code ( gurrrrrrett3 ) ~~~

let time = "" 

// Making units plural appropriately
var yearUnit = `year${years > 1 ? "s" : ""},`;
var monthUnit = `month${months > 1 ? "s" : ""},`;
var dayUnit =  `day${days > 1 ? "s" : ""},`;

// Adding only non-zero units
if (years > 0) time += `${years} ${yearUnit} `;
if (months > 0) time += `${months} ${monthUnit} `;
if (days > 0) time += `${days} ${dayUnit} `;

// Omitting commas wherever syntactically appropriate to resemble natural text
if (time.length > 0 && time.includes(",")) time = time.substring(0, time.lastIndexOf(","));
let itemCount = [years > 0, months > 0, days > 0].reduce((a, b) => a + b, 0);
if (time.length > 0 && time.includes(",")) time = time.substring(0, time.lastIndexOf(",")) + `${itemCount === 3 ? "," : ""} and` + time.substring(time.lastIndexOf(",") + 1);
if (time.length === 0) time = "0 seconds";

// ~~~ end of Gart's code ~~~

if (dateNow > dateTat) {
    dateString = `This tattoo is ${time} old.`;
}
else {
    dateString = "It appears you are attempting to time travel again. Please stop it.";
}
dateElement.innerHTML = dateString;