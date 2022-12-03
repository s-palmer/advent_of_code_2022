// input
// number of calories per elf
// Each Elf separates their own inventory from the previous Elf's inventory (if any) by a blank line.
// e.g.
// 1000
// 2000
// 3000 - elf 1 = 1000 + 2000 + 3000 = 6000

// 4000

// 5000
// 6000

// 7000
// 8000
// 9000

// 10000

// they'd like to know how many Calories are being carried by the Elf carrying the most Calories.
// Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

import { input } from "./input"

type Elf = Array<string>

type Elves = Record<number, Elf>

const elvesRecord: Elves = {}

const inputToArray: Array<string> = input.split('\n')

let elfNumber = 1
let tempElfArray: Elf = []

for (let i = 0; i < inputToArray.length; i++) {
  if (inputToArray[i] != "") {
    tempElfArray.push(inputToArray[i])
  } else {
    elvesRecord[elfNumber] = tempElfArray
    tempElfArray = []
    elfNumber++
  }
}

let currentMaximum: number = 0
let tempMaximum: number = 0
let arrOfNum = []

const elvesRecordSize = Object.keys(elvesRecord).length


for (let i = 1; i < elvesRecordSize; i++) {
  arrOfNum = elvesRecord[i].map(str => {
    return Number(str)
  })

  tempMaximum = arrOfNum.reduce((acc, value) => {
    return acc + value
  }, 0)

  if (tempMaximum > currentMaximum) {
    currentMaximum = tempMaximum
  }
}


console.log(currentMaximum)