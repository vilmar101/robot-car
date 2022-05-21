function Red_LED_lights_on () {
	
}
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
basic.forever(function () {
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
})
basic.forever(function () {
    basic.pause(20000)
    music.playMelody("C D E F G A B C5 ", 2229)
})
basic.forever(function () {
    basic.pause(420000)
    music.playMelody("G B E C D F B A ", 2229)
})
