input.onButtonPressed(Button.A, function () {
    Windows = Windows + 1
})
input.onButtonPressed(Button.AB, function () {
    if (SystemDynamic != 0) {
        SystemDynamic = 0
        Windows = 1
    }
    if (SystemDynamic == 0) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
	
})
let SystemDynamic = 0
let Windows = 0
Windows = 1
SystemDynamic = 1
power.lowPowerEnable(LowPowerEnable.Prevent)
basic.forever(function () {
    if (SystemDynamic == 0) {
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
        // Compass
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
        // Thermometer
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
        // Brightness
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
        // Noise
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
    } else if (SystemDynamic == 0) {
    	
    } else {
    	
    }
})
