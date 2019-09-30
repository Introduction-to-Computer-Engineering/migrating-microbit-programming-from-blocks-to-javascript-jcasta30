//Activity Three: ScoreKeeper Game

// Initialized to Zero
let PlayerAWins = 0
let PlayerBWins = 0
let PlayersTie = 0
PlayersTie = 0
PlayerBWins = 0
PlayerAWins = 0

// Setting button A for Player A
input.onButtonPressed(Button.A, function () {
    PlayerAWins += 1
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.clearScreen()
})

// Setting button B for Player B
input.onButtonPressed(Button.B, function () {
    PlayerBWins += 1
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # # .
        . # . # .
        . # # . .
        `)
    basic.clearScreen()
})

// Setting button A+B for in case of a Tie
input.onButtonPressed(Button.AB, function () {
    PlayersTie += 1
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
})

// Displays Scores
input.onGesture(Gesture.Shake, function () {
    basic.showString("Winner:")
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showNumber(PlayerAWins)
    basic.pause(1000)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # # .
        . # . # .
        . # # . .
        `)
    basic.showNumber(PlayerBWins)
    basic.pause(1000)
    basic.showString("Ties:")
    basic.showNumber(PlayersTie)
    basic.pause(1000)
    basic.clearScreen()

    // Displays total rounds played
    basic.showString("Total Rounds Played:")
    basic.showNumber(PlayerAWins + (PlayerBWins + PlayersTie))
    basic.pause(1000)
    basic.clearScreen()
})
