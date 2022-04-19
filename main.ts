input.onButtonPressed(Button.A, function () {
    startCheck = 1
    choseAction = randint(1, 6)
    while (scoreCount < 5) {
        if (choseAction == 1) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . . # . .
                . . # . .
                `)
            if (input.isGesture(Gesture.LogoUp)) {
                choseAction = randint(1, 6)
                scoreCount += 1
            }
        } else if (choseAction == 2) {
            basic.showLeds(`
                . . # . .
                . . # # .
                # # # # #
                . . # # .
                . . # . .
                `)
            if (input.isGesture(Gesture.TiltRight)) {
                choseAction = randint(1, 6)
                scoreCount += 1
            }
        } else if (choseAction == 3) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . # # # .
                . . # . .
                `)
            if (input.isGesture(Gesture.LogoDown)) {
                choseAction = randint(1, 6)
                scoreCount += 1
            }
        } else if (choseAction == 4) {
            basic.showLeds(`
                . . # . .
                . # # . .
                # # # # #
                . # # . .
                . . # . .
                `)
            if (input.isGesture(Gesture.TiltLeft)) {
                choseAction = randint(1, 6)
                scoreCount += 1
            }
        } else if (choseAction == 5) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            if (input.isGesture(Gesture.ScreenDown)) {
                choseAction = randint(1, 6)
                scoreCount += 1
            }
        } else {
            basic.showLeds(`
                # # # # #
                # . . . .
                # # # # #
                . . . . #
                # # # # #
                `)
            if (input.isGesture(Gesture.Shake)) {
                choseAction = randint(1, 6)
                scoreCount += 1
            }
        }
    }
    while (scoreCount == 5) {
        basic.showString(" YOU WIN!")
    }
})
input.onButtonPressed(Button.B, function () {
    scoreCount = 0
    choseAction = randint(1, 6)
})
let choseAction = 0
let scoreCount = 0
let accelerationZ = false
let accelerationY = false
let accelerationX = false
let startCheck = 0
startCheck = 0
while (startCheck == 0) {
    basic.showString("PRESS A")
    accelerationX = input.acceleration(Dimension.X) == 0.5
    accelerationY = input.acceleration(Dimension.Y) == 0.5
    accelerationZ = input.acceleration(Dimension.Z) == 0.5
    scoreCount = 0
}
