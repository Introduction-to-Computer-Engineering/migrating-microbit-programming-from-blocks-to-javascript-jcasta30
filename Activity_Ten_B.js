// Activity Ten (Part B): Morse Code

//On Start, set group ID to 1 and show string "Morse Code"
radio.setGroup(1)
basic.showString("Morse Code")

// On button A, Radio send number 0
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
// On button B, Radio send number 1
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
// On button A+B, Radio send number 2
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
// When Radio receive number, display corresponding
// LED image 
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(100)
    basic.clearScreen()
})
