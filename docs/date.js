const dateTat = new Date(2022, 11, 13, 4, 20, 0, 0); // This will be the date when I get the tattoo. For now it's just a placeholder.
var dateNow = new Date(); 
var dateDiff = new Date(dateNow - dateTat);
var years = dateDiff.getFullYear() - 1970;
var months = dateDiff.getMonth();
var days = dateDiff.getDate();
const dateElement = document.getElementById("date");
var dateString = "It's been " + years + " years, " + months + " months, and " + days + " days.";

dateElement.innerHTML = dateString;