input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Ghost)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Angry)
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # # # .
    . . # . .
    `)
basic.clearScreen()
basic.showIcon(IconNames.Duck)
basic.clearScreen()
basic.showIcon(IconNames.Giraffe)
while (true) {
	
}
