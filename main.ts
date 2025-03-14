input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    Windows = Windows + 1
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    if (AppStatus == 1) {
        AppStatus = 0
        Windows = 1
    }
    
    if (AppStatus == 0) {
        power.lowPowerEnable(LowPowerEnable.Allow)
        power.lowPowerRequest(LowPowerMode.Continue)
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    AppStatus = 1
})
let AppStatus = 0
let Windows = 0
Windows = 1
let SystemDynamic = 0
AppStatus = 0
power.lowPowerEnable(LowPowerEnable.Prevent)
basic.forever(function on_forever() {
    
    if (Windows < 6 && AppStatus == 0) {
        while (Windows == 1) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . # # # .
                . # # # .
                `)
            basic.showLeds(`
                . . # . .
                . # . # .
                # . . . #
                . # . # .
                . # # # .
                `)
        }
        //  Compass
        while (Windows == 2) {
            basic.showLeds(`
                . . . . #
                . . # # .
                . # # # .
                . # # . .
                # . . . .
                `)
            basic.showLeds(`
                . . . # .
                . . # # .
                . # # # .
                . # # . .
                . # . . .
                `)
        }
        //  Thermometer
        while (Windows == 3) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . # . # .
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . # . .
                . . # . .
                . # . # .
                . # # # .
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . # . # .
                . # # # .
                `)
        }
        //  Brightness
        while (Windows == 4) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
            basic.showLeds(`
                # . # . #
                . # # # .
                # # . # #
                . # # # .
                # . # . #
                `)
        }
        //  Noise
        while (Windows == 5) {
            basic.showLeds(`
                . . # . .
                . # # . .
                # . . # .
                . # # . .
                . . # . .
                `)
            basic.showLeds(`
                . . # . #
                . # # . .
                # . . # .
                . # # . .
                . . # . #
                `)
        }
        //  Noise
        while (Windows == 6) {
            Windows = 1
        }
    }
    
})
basic.forever(function on_forever2() {
    if (Windows < 6 && AppStatus == 1) {
        while (Windows == 2) {
            basic.showString("" + ("" + input.compassHeading()))
        }
        while (Windows == 3) {
            basic.showString("" + ("" + input.temperature()))
        }
        while (Windows == 4) {
            basic.showString("" + ("" + input.lightLevel()))
        }
    }
    
})
