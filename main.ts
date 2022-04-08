input.onButtonPressed(Button.A, function () {
    radio.sendValue("name", 0)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    basic.pause(100)
    if (x == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        y = 1
    }
    if (x == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        y = 2
    }
    if (x == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        y = 3
    }
})
input.onButtonPressed(Button.B, function () {
    basic.pause(2000)
    if (y == 1 && z == 1 || (y == 1 && z == 1 || y == 1 && z == 1)) {
        basic.showString("Draw")
        basic.clearScreen()
    }
    if (y == 1 && z == 2) {
        basic.showString("P1 Win")
        basic.clearScreen()
    }
    if (y == 2 && z == 3) {
        basic.showString("P1 Win")
        basic.clearScreen()
    }
    if (y == 3 && z == 1) {
        basic.showString("P1 Win")
        basic.clearScreen()
    }
    if (y == 2 && z == 1) {
        basic.showString("P2 Win")
    }
    if (y == 3 && z == 2) {
        basic.showString("P2 Win")
        basic.clearScreen()
    }
    if (y == 1 && z == 3) {
        basic.showString("P2 Win")
        basic.clearScreen()
    }
})
radio.onReceivedValue(function (name, value) {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    basic.pause(100)
    if (x == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        z = 1
    }
    if (x == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        z = 2
        asd = 0
    }
    if (x == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        z = 3
    }
})
let asd = 0
let z = 0
let y = 0
let x = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
loops.everyInterval(100, function () {
    x = randint(1, 3)
})
