// Final Project: Compass

// Initialized variable degrees
let degrees = 0

// On button A, the compass will activate
input.onButtonPressed(Button.A, function () {
    while (true) {
        degrees = input.compassHeading()
        // North Commands
        if (degrees < 45 || degrees > 315) {
            basic.showString("N")
            basic.clearScreen()
        // East Commands
        } else if (degrees < 135) {
            basic.showString("E")
            basic.clearScreen()
        // South Commands
        } else if (degrees < 225) {
            basic.showString("S")
            basic.clearScreen()
        // West Commands
        } else {
            basic.showString("W")
            basic.clearScreen()
        }
    }
    basic.clearScreen()
})

// On button B, a Middle C tone will play for 1 beat, and the compass will calibrate. Then, a face is
// plotted, and the screen is cleared. Lastly, a string will appear displaying "Done Calibrating".
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()

    //Play Tone
    music.playTone(262, music.beat(BeatFraction.Whole))

    input.calibrateCompass()
    basic.pause(500)

    //Plot Face
    led.plot(1, 0)
    led.plot(3, 0)
    led.plot(2, 1)
    led.plot(1, 3)
    led.plot(2, 3)
    led.plot(3, 3)
    basic.pause(1000)
    basic.clearScreen()

    // "Done Calibrating" String
    basic.showString("Done Calibrating")
    basic.clearScreen()
})
