"use strict";
// input
// number of calories per elf
// Each Elf separates their own inventory from the previous Elf's inventory (if any) by a blank line.
// e.g.
// 1000
// 2000
// 3000 - elf 1 = 1000 + 2000 + 3000 = 6000
Object.defineProperty(exports, "__esModule", { value: true });
// 4000
// 5000
// 6000
// 7000
// 8000
// 9000
// 10000
// they'd like to know how many Calories are being carried by the Elf carrying the most Calories.
// Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?
const input_1 = require("./input");
const elvesRecord = {};
const inputToArray = input_1.input.split('\n');
let elfNumber = 1;
let tempElfArray = [];
for (let i = 0; i < inputToArray.length; i++) {
    if (inputToArray[i] != "") {
        tempElfArray.push(inputToArray[i]);
    }
    else {
        elvesRecord[elfNumber] = tempElfArray;
        tempElfArray = [];
        elfNumber++;
    }
}
let currentMaximum = 0;
let tempMaximum = 0;
let arrOfNum = [];
const elvesRecordSize = Object.keys(elvesRecord).length;
for (let i = 1; i < elvesRecordSize; i++) {
    arrOfNum = elvesRecord[i].map(str => {
        return Number(str);
    });
    tempMaximum = arrOfNum.reduce((acc, value) => {
        return acc + value;
    }, 0);
    if (tempMaximum > currentMaximum) {
        currentMaximum = tempMaximum;
    }
}
console.log(currentMaximum);