// One day Time in ms (milliseconds)
const oneDay = 1000 * 60 * 60 * 24;
const funFactText = document.getElementById("funFact");
var funnyElement;

var presentDate = 0;
var result = 0;
var finalResult = 0;
var divisibleNumbers = [];
var factString = "";
var highlyDivisible = 20;

var funnyString = "";

presentDate = new Date();
result = Math.round(presentDate.getTime() / (oneDay));
finalResult = result.toFixed(0);

for (let i = 2; i < finalResult; i++) {
    if (finalResult % i == 0) {
        divisibleNumbers.push(i);
    }
}

if (divisibleNumbers.length > 2) {
    factString = "FUN FACT! Today's date is divisible by ";
    for (let j = 0; j < divisibleNumbers.length; j++) {
        if (j <= divisibleNumbers.length - 2) {
            factString += divisibleNumbers[j] + ", ";
        }
        if (j == divisibleNumbers.length - 1) {
            factString += "and " + divisibleNumbers[j] + "!"; //adding different condition for last one
            if (divisibleNumbers.length > highlyDivisible) {
                factString += " Wow! That's a lot of numbers!";
            }
        }
    }
}
if (divisibleNumbers.length == 2) {
    factString = `FUN FACT! Today's date is only divisible by ${divisibleNumbers[0]} and ${divisibleNumbers[1]}!`;
}
if (divisibleNumbers.length == 1) {
    factString = `FUN FACT! Today's date is divisible by only one number! ${divisibleNumbers[0]}!`;
}
if (divisibleNumbers.length == 0) {
    factString = `TODAY'S DATE IS PRIME! ${finalResult}!!!`;
}

funFactText.innerHTML = factString;

// console.log(finalResult);
// console.log(divisibleNumbers);

// console.log(divisibleNumbers.length);

function extremelyFunny() {
    for (let index = 0; index < finalResult; index++) {
        funnyString += "Sex! ";
    }
    funnyElement = document.getElementById("funny");
    funnyElement.innerHTML = funnyString;
}