const dateTat = new Date(1671816600000); // This will be the date when I get the tattoo. For now it's just a placeholder.
const dateElement = document.getElementById("date");

var dateNow = new Date(); 
var dateDiff = new Date(dateNow - dateTat);
var years = dateDiff.getFullYear() - 1970;
var months = dateDiff.getMonth();
var days = dateDiff.getDate() - 1;
var dateString;

// Gart's code ( gurrrrrrett3 )
let time = ""
var yearUnit = `year${years > 1 ? "s" : ""},`;
var monthUnit = `month${months > 1 ? "s" : ""},`;
var dayUnit =  `day${days > 1 ? "s" : ""},`;

if (years > 0) time += `${years} ${yearUnit} `;
if (months > 0) time += `${months} ${monthUnit} `;
if (days > 0) time += `${days} ${dayUnit} `;

if (time.length > 0 && time.includes(",")) time = time.substring(0, time.lastIndexOf(","));
let itemCount = [years > 0, months > 0, days > 0].reduce((a, b) => a + b, 0);
if (time.length > 0 && time.includes(",")) time = time.substring(0, time.lastIndexOf(",")) + `${itemCount === 3 ? "," : ""} and` + time.substring(time.lastIndexOf(",") + 1);
if (time.length === 0) time = "0 seconds";
// end of Gart's code
console.log(`${years} ${months} ${days}`);

if (dateNow > dateTat) {
    dateString = `This tattoo is ${time} old`;
}
else {
    dateString = "This tattoo hasn't been born yet. Please be patient.";
}
dateElement.innerHTML = dateString;