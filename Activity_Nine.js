// Activity Nine: Binary Transmogrifier

// Varibles Initialized
let binary = ""
let decimal = 0
decimal = 0
binary = ""

// Press button A, to enter a binary 1
input.onButtonPressed(Button.A, function () {
    binary = "" + binary + "1"
    basic.showString(binary)
    decimal = decimal * 2 + 1

    // Inserted a small heart icon (on both buttons) as sort of a waiting
    // screen, when icon is displayed the user will know to enter their response.
    basic.showIcon(IconNames.SmallHeart)
})

// Press button B, to enter a binary 0
input.onButtonPressed(Button.B, function () {
    binary = "" + binary + "0"
    basic.showString(binary)
    decimal = decimal * 2
    basic.showIcon(IconNames.SmallHeart)
})

// On button A+B, shows decimal, and resets decimal and binary values
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + decimal)
    basic.clearScreen()

    // Respectively sets variables to zero again and
    // empty, accordingly
    decimal = 0
    binary = ""
})
