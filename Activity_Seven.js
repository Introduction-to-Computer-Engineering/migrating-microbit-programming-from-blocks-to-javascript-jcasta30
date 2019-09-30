//Activity Seven: Animations and Patterns

// On Start, a still face will be plot
// then, the mouth will be toggled to move up in down 10 times.
// Lastly, the screen will be cleared and 
// the small heart icon will appear, with a brightness set to 225.  
led.plot(1, 0)
led.plot(3, 0)
led.plot(2, 1)
led.plot(1, 3)
led.plot(2, 3)
led.plot(3, 3)
basic.pause(1000)
for (let i = 0; i < 10; i++) {
    led.toggle(0, 2)
    led.toggle(4, 2)
    basic.pause(250)
    led.toggle(0, 3)
    led.toggle(4, 3)
}
basic.clearScreen()
led.setBrightness(255)
basic.showIcon(IconNames.SmallHeart)

// When button A is pressed, a random set of LED light patterns  will display.
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, Math.randomRange(0, 5))
    }
})

// Press button B to check and display the status of the specific LED
input.onButtonPressed(Button.B, function () {
    if (led.point(0, 0)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})

// Tilt Left to adjust brightness by substracting 25 to the brightness
input.onGesture(Gesture.TiltLeft, function () {
    led.setBrightness(led.brightness() - 25)
})
// Tilt right to adjust brightness by adding 25 to the brightness
input.onGesture(Gesture.TiltRight, function () {
    led.setBrightness(led.brightness() + 25)
})

// Shake microbit to clear screen and display the brightness number, 
// as well as the small heart icon
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.showNumber(led.brightness())
    basic.showIcon(IconNames.Heart)
})
