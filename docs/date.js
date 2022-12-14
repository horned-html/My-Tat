const dateTat = new Date("2001-11-9"); // This will be the date when I get the tattoo. For now it's just a placeholder.
var dateNow = new Date(); 
var dateDiff = new Date(dateNow - dateTat);
var years = dateDiff.getFullYear() - 1970;
var months = dateDiff.getMonth();
var days = dateDiff.getDate() - 1;
const dateElement = document.getElementById("date");
var dateString;

// dateString = "It's been " + years + " years, " + months + " months, and " + days + " days.";
dateString = "It's been ";

// Life is pain I hate
// To be continued.......
if (years == 0) {
    if (months == 0) {
        if (days == 0) {
            dateString = "What";
        }
        else if (days == 1) {
            dateString += "1 day.";
        }
        else {
            dateString += (days + " days.");
        }
    }
    else if (months == 1) {
        if (days == 0) {
            dateString += "1 month.";
        }
        else if (days == 1) {
            dateString += "1 month and 1 day.";
        }
        else {
            dateString += ("1 month and " + days + " days.");
        }
    }
    else {
        if (days == 0) {
            dateString += (months + " months.");
        }
        else if (days == 1) {
            dateString += (months + " months and 1 day.");
        }
        else {
            dateString += (months + " months and " + days + " days.")
        }
    }
}
else if (years == 1) {
    if (months == 0) {
        if (days == 0) {
            dateString += "1 year.";
        }
        else if (days == 1) {
            dateString += "1 day.";
        }
        else {
            dateString += (days + " days.");
        }
    }
    else if (months == 1) {
        if (days == 0) {
            dateString += "1 month.";
        }
        else if (days == 1) {
            dateString += "1 month and 1 day.";
        }
        else {
            dateString += ("1 month and " + days + " days.");
        }
    }
    else {
        if (days == 0) {
            dateString += (months + " months.");
        }
        else if (days == 1) {
            dateString += (months + " months and 1 day.");
        }
        else {
            dateString += (months + " months and " + days + " days.")
        }
    }
}
else {

}

dateElement.innerHTML = dateString;