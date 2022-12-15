const dateTat = new Date("1977-12-14"); // This will be the date when I get the tattoo. For now it's just a placeholder.
const dateElement = document.getElementById("date");

var dateNow = new Date(); 
var dateDiff = new Date(dateNow - dateTat);
var years = dateDiff.getFullYear() - 1970;
var months = dateDiff.getMonth();
var days = dateDiff.getDate() - 1;
var dateString;
var time = "";

// Gart's Code (thank you btw)
var yearUnit = `year${years > 1 ? "s" : ""},`;
var monthUnit = `month${months > 1 ? "s" : ""},`;
var dayUnit =  `day${days > 1 ? "s" : ""},`;
// End of

// console.log("It's been " + years + " years, " + months + " months, and " + days + " days.");
// dateString = "This tattoo is ";

if (years != 0) time += `${years} ${yearUnit} `;
if (months != 0) time += `${months} ${monthUnit} `;
if (days != 0) time += `${days} ${dayUnit} `;

// more gart code
if (time.length > 0 && time.includes(",")) time = time.substring(0, time.lastIndexOf(","));
if (time.length > 0 && time.includes(",")) time = time.substring(0, time.lastIndexOf(",")) + ", and" + time.substring(time.lastIndexOf(",") + 1);
if (time.length === 0) time = "0 seconds";
// endof

dateString = `This tattoo is ${time} old`

dateElement.innerHTML = dateString;