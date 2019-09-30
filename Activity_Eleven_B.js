//Activity Eleven (Part B): Headband Charades

//On Start, Initialize Variables and count down from 3 
let index = 0
let arrayWords: string[] = []
arrayWords = ["Cat", "Guitar", "Flashlight", "Cupcake", "Tree", "Frisbee", "Dog", "Phone", "Pencil"]
index = 0
basic.showLeds(`
    . # # # .
    . . . # .
    . . # # .
    . . . . .
    . . # . .
    `)
basic.clearScreen()
basic.pause(100)
basic.showNumber(3)
basic.pause(100)
basic.showNumber(2)
basic.pause(100)
basic.showNumber(1)
basic.clearScreen()
basic.pause(100)
basic.showString("" + arrayWords[index])

// On Screen Up, show string
input.onGesture(Gesture.ScreenUp, function () {
    basic.showString("" + arrayWords[index])
})

// On Screen Down, check the current value of the
// index, then possibly change the value of index by 1.
// Also, indicate the end of the game.
input.onGesture(Gesture.ScreenDown, function () {
    led.stopAnimation()
    basic.clearScreen()
    if (index < arrayWords.length - 1) {
        index += 1
    } else {
        game.gameOver()
    }
})
