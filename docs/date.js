const dateTat = new Date("1977-11-15"); // This will be the date when I get the tattoo. For now it's just a placeholder.
const dateElement = document.getElementById("date");

var dateNow = new Date(); 
var dateDiff = new Date(dateNow - dateTat);
var years = dateDiff.getFullYear() - 1970;
var months = dateDiff.getMonth();
var days = dateDiff.getDate() - 1;
var dateString;

let time = []
var yearUnit = `year${years > 1 ? "s" : ""},`;
var monthUnit = `month${months > 1 ? "s" : ""},`;
var dayUnit =  `day${days > 1 ? "s" : ""},`;
if (years > 0) time.push(`${years} ${yearUnit} `);
if (months > 0) time.push(`${months} ${monthUnit} `);
if (days > 0) time.push(`${days} ${dayUnit} `);

if (time.length === 0) time = "0 seconds";
if (time.length === 1) time = time[0];
if (time.length === 2) time = time.join(" and ");
if (time.length > 2) {
    time[time.length - 1] = `and ${time[time.length - 1]}`;
    time = time.join(", ");
}

console.log(time);

dateString = `This tattoo is ${time} old`

dateElement.innerHTML = dateString;