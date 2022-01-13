const fs = require('fs');
const input = fs.readFileSync('numbers.txt').toString(); //läser in txt filen med värderna angivna till mig
const valueCounter = input.split(','); // använder mig an en split för att separera värderna givna i textfilen

const fishPool = {};
for (let i = 0; i < 9; i++) {
fishPool[i] = 0;
} //forloop för att skapa array med 8 platser

valueCounter.forEach(counter => {
fishPool[counter]++;
}); //räknar varje värde försig samt summerar dem för att se hur många fiskar det finns i varje värde

function increase(fishArray) {
    const zeroValue = fishArray[0];
    for (let i = 0; i < 8; i++) {
        fishArray[i] = fishArray[i + 1];
    }   //logiken samt kraven för att ändra på värderna
    fishArray[8] = zeroValue; 
    fishArray[6] += zeroValue; 
}

function changeValue(fishArray, interval) {
    const copy = {fishArray};
    for (let i = 0; i < interval; i++) {
        increase(fishArray);
    }

    return Object.values(copy)
}

const result = changeValue(fishPool, 80);

console.log(result)

//console.log (result.reduce((a, b) => a + b));