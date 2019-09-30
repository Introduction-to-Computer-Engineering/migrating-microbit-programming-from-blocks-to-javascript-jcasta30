// Activity Ten (Part A): Marco Polo

// On Start, set group ID to 1
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    # . # # #
    # # # # #
    # . # # .
    # . # # .
    `)
basic.pause(1000)
basic.clearScreen()

// On button A, send radio string "Marco" and play low c tone
input.onButtonPressed(Button.A, function () {
    radio.sendString("Marco")
    music.playTone(131, music.beat(BeatFraction.Whole))
})

// On button B, send radio string "Polo" and play middle C tone 
input.onButtonPressed(Button.B, function () {
    radio.sendString("Polo")
    music.playTone(262, music.beat(BeatFraction.Whole))
})

// When string received, display string 
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
