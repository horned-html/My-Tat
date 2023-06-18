// One day Time in ms (milliseconds)
const oneDay = 1000 * 60 * 60 * 24;
const funFactText = document.getElementById("funFact");

var presentDate = 0;
var result = 0;
var finalResult = 0;
var divisibleNumbers = [];
var factString = "";

presentDate = new Date();
result = Math.round(presentDate.getTime() / (oneDay));
finalResult = result.toFixed(0);

for (let i = 2; i < finalResult; i++) {
    if (finalResult % i == 0) {
        divisibleNumbers.push(i);
    }
}

if (divisibleNumbers.length > 0) {
    factString = "FUN FACT! Today's date is divisible by ";
    for (let j = 0; j < divisibleNumbers.length; j++) {
        if (j <= divisibleNumbers.length - 2) {
            factString += divisibleNumbers[j] + ", ";
        }
        if (j == divisibleNumbers.length - 1) {
            factString += "and " + divisibleNumbers[j] + "!";
        }
    }
    funFactText.innerHTML = factString;
}
else {
    factString = "TODAY'S DATE IS PRIME! " + finalResult + "!!!";
}

console.log(finalResult);
console.log(divisibleNumbers);
