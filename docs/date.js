const dateTat = new Date("2004-4-20"); // This will be the date when I get the tattoo. For now it's just a placeholder.
var dateNow = new Date(); 
var dateDiff = new Date(dateNow - dateTat);
var years = dateDiff.getFullYear() - 1970;
var months = dateDiff.getMonth();
var days = dateDiff.getDate() - 1;
const dateElement = document.getElementById("date");
var dateString;

console.log("It's been " + years + " years, " + months + " months, and " + days + " days.");
dateString = "It's been ";
// console.log(dateTat.getMonth());
// console.log(dateNow.getMonth());

dateElement.innerHTML = dateString;