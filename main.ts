input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(10)
        basic.clearScreen()
        basic.pause(10)
        basic.showIcon(IconNames.Happy)
        basic.pause(10)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Yes)
        basic.pause(10)
        basic.clearScreen()
        basic.pause(10)
        basic.showIcon(IconNames.Yes)
        basic.pause(10)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Sad)
        basic.pause(10)
        basic.clearScreen()
        basic.pause(10)
        basic.showIcon(IconNames.Sad)
        basic.pause(10)
    }
})
