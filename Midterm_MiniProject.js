// Midterm Project: Stopwatch

// Initialized variable startTime to 0
let startTime = 0
startTime = 0

// On button A, start stopwatch 
// On button A again, end stopwatch.
input.onButtonPressed(Button.A, function () {
    if (startTime == 0) {
        startTime = input.runningTime()

        // Play a high c tone immediately after start, to let
        // user know of start.
        music.playTone(523, music.beat(BeatFraction.Whole))

        // The small heart icon is displayed will waiting for
        // stopwatch
        basic.showIcon(IconNames.SmallHeart)
    } else {
        // A low C tone will play immediately after button A
        // is pressed again, to let the user know the
        // stopwatch has stopped.
        music.playTone(131, music.beat(BeatFraction.Whole))

        // Display stopwatch time
        basic.showNumber(Math.idiv(input.runningTime() - startTime, 1000))
        startTime = 0
    }
})

// On button B, show a smiley face
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})

// On button A+B, Play microbit melody "Entertainer"
input.onButtonPressed(Button.AB, function () {
    music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.OnceInBackground)
})