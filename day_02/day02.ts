import { input } from "./input";
const inputToArray: Array<string> = input.split('\n')

// A: rock
// B: paper
// C: scissors
// X: rock
// Y: paper
// Z: scissors

type Hands = {
  [key: number]: string[]
}

type PickedType = {
  [key: string]: number
}

const winningHands: Hands = {
  1: ["A Y"],
  2: ["B Z"],
  3: ["C X"]
}

const drawnHands: Hands = {
  1: ["A X"],
  2: ["B Y"],
  3: ["C Z"]
}

const myPickedScore: PickedType = {
  X: 1,
  Y: 2,
  Z: 3
}

// part 1

let myScore: number = 0

inputToArray.map((arr) => {
  for (const hand in winningHands) {
    if (arr === winningHands[hand].toString()) {
      myScore += 6
    }
    if (arr === drawnHands[hand].toString()) {
      myScore += 3
    }
  }
  myScore += myPickedScore[arr.toString().slice(-1)]
})

console.log(myScore)

// part 2

// X - lose
// Y - draw
// Z - win

// A: rock
// B: paper
// C: scissors
// X: rock
// Y: paper
// Z: scissors

const outcomeScores: PickedType = {
  X: 0,
  Y: 3,
  Z: 6
}

const moveScores: PickedType = {
  A: 1,
  B: 2,
  C: 3
}

type HandTypes = {
  [key: string]: string
}

const winPicks: HandTypes = {
  "A": "B",
  "B": "C",
  "C": "A"
}

const losePicks: HandTypes = {
  "A": "C",
  "B": "A",
  "C": "B"
}

let opponentMove: string
let myMove: string
let result: string
let myScore2: number = 0

inputToArray.map((arr) => {
  opponentMove = arr.toString().slice(0, 1)
  result = arr.toString().slice(-1)
  myScore2 += outcomeScores[result]
  if (result === "X") {
    myMove = losePicks[opponentMove]
    myScore2 += moveScores[myMove]
  }

  if (result === "Z") {
    myMove = winPicks[opponentMove]
    myScore2 += moveScores[myMove]
  }

  if (result === "Y") {
    myMove = opponentMove
    myScore2 += moveScores[myMove]
  }
})

console.log(myScore2)