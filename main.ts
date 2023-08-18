radio.onReceivedNumber(function (receivedNumber) {
    status = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    status = 0
})
let status = 0
led.setBrightness(100)
status = 0
radio.setGroup(1)
basic.forever(function () {
    if (status == 0) {
        led.toggle(0, 0)
        basic.pause(1000)
    } else if (status == 1) {
        for (let index = 0; index < 4; index++) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(100)
        }
        basic.pause(2000)
    }
})
