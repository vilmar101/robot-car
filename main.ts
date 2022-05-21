function Green_LED_lights_on () {
	
}
function Yellow_LED_lights_on () {
	
}
function Red_LED_lights_on () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    strip.show()
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
