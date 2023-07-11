input.onButtonPressed(Button.A, function () {
    activarBombaPotable()
})
function activarBombaNoPotable () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
	
})
radio.onReceivedValue(function (name, value) {
    if (name == "conductividad") {
        if (value < 50) {
            activarBombaPotable()
        } else {
            activarBombaNoPotable()
        }
    }
})
function activarBombaPotable () {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.clearScreen()
}
radio.setGroup(1)
