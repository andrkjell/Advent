const fs = require('fs');
const input = fs.readFileSync('numbers.txt').toString(); //läser in txt filen med värderna angivna till mig
const array = input.split(','); // använder mig an en split för att separera värderna givna i textfilen

const fishPool = {};
for (let i = 0; i < 9; i++) {
fishPool[i] = 0;
} //forloop för att skapa array med 8 platser

console.log (fishPool);