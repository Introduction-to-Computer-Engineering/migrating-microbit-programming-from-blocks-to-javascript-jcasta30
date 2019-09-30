// Activity Five: Loops Demos

//Variables
let sprite: game.LedSprite = null
let index = 0
sprite = game.createSprite(0, 0)

// When button A is pressed: sprite will move by 4,
// turn right 90 degrees, then pause for 100ms. This
// will repeat 4 times.
input.onButtonPressed(Button.A, function () {
    for (let i = 0; i < 4; i++) {
        sprite.move(4)
        sprite.turn(Direction.Right, 90)
        basic.pause(100)
    }
})

// When button B is pressed, five different sounds
// will play in ascending order. This will repeat twice.
input.onButtonPressed(Button.B, function () {
    for (let i = 0; i < 2; i++) {
        music.playTone(131, music.beat(BeatFraction.Half))
        music.playTone(165, music.beat(BeatFraction.Half))
        music.playTone(196, music.beat(BeatFraction.Half))
        music.playTone(247, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
    }
})

// When button A+B is pressed, two different tones will play separately for 3 times.
input.onButtonPressed(Button.AB, function () {
    for (let i = 0; i < 3; i++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})

// The LED light will forever move across the entire
// display from left to right, top row to bottom row.
basic.forever(function () {
    // For Loop
    for (let yindex = 0; yindex <= 4; yindex++) {
        // For Loop
        for (let xindex = 0; xindex <= 4; xindex++) {
            led.plot(xindex, yindex)
            basic.pause(100)
            led.unplot(xindex, yindex)
            basic.pause(100)
        }
    }
})
