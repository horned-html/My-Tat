const dateTat = new Date("1977-2-23"); // This will be the date when I get the tattoo. For now it's just a placeholder.
const dateElement = document.getElementById("date");

var dateNow = new Date(); 
var dateDiff = new Date(dateNow - dateTat);
var years = dateDiff.getFullYear() - 1970;
var months = dateDiff.getMonth();
var days = dateDiff.getDate() - 1;
var dateString;

// Gart's Code (thank you btw)
var yearUnit = `year${years > 1 ? "s" : ""}`;
var monthUnit = `month${months > 1 ? "s" : ""}`;
var dayUnit =  `day${days > 1 ? "s" : ""}`;
// End of

// console.log("It's been " + years + " years, " + months + " months, and " + days + " days.");
dateString = "This tattoo is ";

if (years != 0) {
    dateString += `${years} ${yearUnit} `;
}
if (months != 0) {
    dateString += `${months} ${monthUnit} `;
}
if (days != 0) {
    dateString += `${days} ${dayUnit} `;
}

dateString += ` old`

dateElement.innerHTML = dateString;