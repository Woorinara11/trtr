let 가위바위보 = 0
input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    basic.showNumber(game.score())
})
input.onGesture(Gesture.Shake, function () {
    가위바위보 = randint(1, 3)
    if (가위바위보 == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    } else if (가위바위보 == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    game.setScore(0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    game.addScore(1)
    basic.pause(1000)
    basic.showNumber(game.score())
})
