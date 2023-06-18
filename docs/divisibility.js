// One day Time in ms (milliseconds)
const oneDay = 1000 * 60 * 60 * 24;
const funFactText = document.getElementById("funFact");

var presentDate = 0;
var result = 0;
var finalResult = 0;
// var divisibleNumber = 0;
var divisibleNumbers = [];

presentDate = new Date();
result = Math.round(presentDate.getTime() / (oneDay));
finalResult = result.toFixed(0);

for (let index = 1; index < finalResult; index++) {
    if (finalResult % index == 0) {
        divisibleNumbers.push(index);
        // divisibleNumber = index;
        // funFactText.innerHTML = "FUN FACT! Today's date is divisible by " + divisibleNumber + "!";
    }
}

console.log(finalResult);
console.log(divisibleNumbers);
