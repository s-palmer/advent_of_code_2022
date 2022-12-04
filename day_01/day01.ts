// Part 1
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
  arrOfNum = elvesRecord[i].map(str => parseInt(str, 10))

  tempMaximum = arrOfNum.reduce((acc, value) => {
    return acc + value
  }, 0)

  if (tempMaximum > currentMaximum) {
    currentMaximum = tempMaximum
  }
}

console.log(currentMaximum)

// Part 2

// By the time you calculate the answer to the Elves' question, they've already realized that the Elf carrying the most Calories of food might eventually run out of snacks.

// To avoid this unacceptable situation, the Elves would instead like to know the total Calories carried by the top three Elves carrying the most Calories. That way, even if one of those Elves runs out of snacks, they still have two backups.

// In the example above, the top three Elves are the fourth Elf (with 24000 Calories), then the third Elf (with 11000 Calories), then the fifth Elf (with 10000 Calories). The sum of the Calories carried by these three elves is 45000.

// Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?

let sortedArray = []
let elfArray = []

for (let i = 1; i < elvesRecordSize; i++) {
  elfArray = elvesRecord[i].map(str => {
    return Number(str)
  })

  sortedArray.push(elfArray.reduce((acc, value) => {
    return acc + value
  }, 0))

  sortedArray.sort(function(a, b) {return b-a})
}

const topElves = (sortedArray[0] + sortedArray[1] + sortedArray[2])

console.log(topElves)