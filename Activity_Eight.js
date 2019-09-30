// Activity Eight: Double Coin Flipper

// Variables initialized to 0 or empty respectively
let playerBScore = 0
let playerAScore = 0
let coinBHeads = false
let coinAHeads = false
coinAHeads = false
coinBHeads = false
playerAScore = 0
playerBScore = 0
basic.showLeds(`
    . # . . .
    # # # . .
    . # . # .
    . . # # #
    . . . # .
    `)

// On shake, flip coin and randomly  displays side A or B.
input.onGesture(Gesture.Shake, function () {
    coinAHeads = Math.randomBoolean()
    coinBHeads = Math.randomBoolean()
    if (coinAHeads == coinBHeads) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
        basic.pause(100)
        playerAScore += 1
    } else {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # # . .
            `)
        basic.pause(100)
        playerBScore += 1
    }
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . # .
        . . # # #
        . . . # .
        `)
})

// On button A, display players' scores, and reset scores to 0.
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("Player A Score:")
    basic.clearScreen()
    basic.pause(100)
    basic.showNumber(playerAScore)
    basic.pause(500)
    basic.clearScreen()
    basic.showString("Player B Score:")
    basic.pause(100)
    basic.showNumber(playerBScore)
    basic.pause(500)
    basic.clearScreen()
    playerAScore = 0
    playerBScore = 0
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . # .
        . . # # #
        . . . # .
        `)
})

