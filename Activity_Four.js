// Activity Four: Rock, Paper, Scissors

// Variabels declared and initialized to 0
let hand = 0
let playerAScore = 0
let computerBot = 0

// Shake to begin game
input.onGesture(Gesture.Shake, function () {
    hand = Math.randomRange(0, 3)

    // Randomly chooses Rock, Paper, or Scissors
    if (hand == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})

// Pressing buttons will add points
// Press button A to add a point to yourself (if won round), aka player A.
input.onButtonPressed(Button.A, function () {
    playerAScore += 1
    basic.pause(100)
})

// Press button B to add point to Computer Bot
input.onButtonPressed(Button.B, function () {
    computerBot += 1
    basic.pause(100)
})

// Press A + B to show final scores of player and bot.
// Then restarts game, by setting the players' scores back to 0
input.onButtonPressed(Button.AB, function () {
    basic.showString("Score:")
    basic.pause(500)
    basic.showString("You:")
    basic.showNumber(playerAScore)
    basic.pause(1000)
    basic.showString("Bot:")
    basic.showNumber(computerBot)
    basic.pause(1000)
    basic.clearScreen()
    playerAScore = 0
    computerBot = 0
    basic.pause(500)
})