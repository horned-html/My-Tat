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
        // divisibleNumber = i;
        // funFactText.innerHTML = "FUN FACT! Today's date is divisible by " + divisibleNumber + "!";
    }
}

if (divisibleNumbers.length > 1) {
    funFactText.innerHTML = "FUN FACT! Today's date is divisible by ";
    for (let j = 0; j < divisibleNumbers.length; j++) {
        funFactText.innerHTML += divisibleNumbers[j] + ", ";
    }
}
console.log(finalResult);
console.log(divisibleNumbers);
