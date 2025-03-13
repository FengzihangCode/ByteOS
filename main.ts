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
    SystemDynamic += 1
})
let SystemDynamic = 0
let Windows = 0
Windows = 1
SystemDynamic = 0
power.lowPowerEnable(LowPowerEnable.Prevent)
basic.forever(function () {
    if (SystemDynamic < 6) {
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
    } else if (Windows == 2 && SystemDynamic == 1) {
    	
    } else if (Windows == 3 && SystemDynamic == 1) {
    	
    } else if (Windows == 4 && SystemDynamic == 1) {
    	
    } else if (Windows == 6) {
        Windows = 1
    } else {
    	
    }
})
basic.forever(function () {
	
})
