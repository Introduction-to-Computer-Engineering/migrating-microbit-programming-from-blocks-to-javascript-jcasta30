//Activity Eleven: Starry Night

//List is declared and initialized
let list = [5, 2, 1, 3, 4]

// When button A is pressed, randomly plotted LEDs will be displayed 
input.onButtonPressed(Button.A, function () {
    // Two For Loops
    for (let i = 0; i <= list.length - 1; i++) {
        for (let j = 0; j <= list[i] - 1; j++) {
            led.plot(Math.randomRange(0, 5), Math.randomRange(0, 5))
        }
        basic.pause(1000)
        basic.clearScreen()
    }
})

// When button B is pressed, the values of elements of the array will be displayed
input.onButtonPressed(Button.B, function () {
    for (let value of list) {
        basic.showNumber(value)
    }
    basic.clearScreen()
})
