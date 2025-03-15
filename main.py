def on_button_pressed_a():
    global Windows
    if 0 == 0:
        Windows = Windows + 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global AppStatus, Windows
    if AppStatus == 1:
        AppStatus = 0
        Windows = 1
    if AppStatus == 0:
        power.low_power_request(LowPowerMode.CONTINUE)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global AppStatus
    AppStatus = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

AppStatus = 0
Windows = 0
SystemDynamic = 0
Windows = 1
AppStatus = 0
power.low_power_enable(LowPowerEnable.PREVENT)

def on_forever():
    if Windows < 6 and AppStatus == 1:
        while Windows == 2:
            basic.show_string("" + str((input.compass_heading())))
        while Windows == 3:
            basic.show_string("" + str((input.temperature())))
        while Windows == 4:
            basic.show_string("" + str((input.light_level())))
        while Windows == 5:
            basic.show_string("" + str((input.sound_level())))
basic.forever(on_forever)

def on_forever2():
    global Windows
    if Windows < 6 and AppStatus == 0:
        while Windows == 1:
            basic.show_leds("""
                . . # . .
                . # # # .
                # # # # #
                . # # # .
                . # # # .
                """)
            basic.show_leds("""
                . . # . .
                . # . # .
                # . . . #
                . # . # .
                . # # # .
                """)
        # Compass
        while Windows == 2 and AppStatus == 0:
            basic.show_leds("""
                . . . . #
                . . # # .
                . # # # .
                . # # . .
                # . . . .
                """)
            basic.show_leds("""
                . . . # .
                . . # # .
                . # # # .
                . # # . .
                . # . . .
                """)
        # Thermometer
        while Windows == 3 and AppStatus == 0:
            basic.show_leds("""
                . . . . .
                . . . . .
                . . # . .
                . # . # .
                . # # # .
                """)
            basic.show_leds("""
                . . . . .
                . . # . .
                . . # . .
                . # . # .
                . # # # .
                """)
            basic.show_leds("""
                . . # . .
                . . # . .
                . . # . .
                . # . # .
                . # # # .
                """)
        # Brightness
        while Windows == 4 and AppStatus == 0:
            basic.show_leds("""
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                """)
            basic.show_leds("""
                # . # . #
                . # # # .
                # # . # #
                . # # # .
                # . # . #
                """)
        # Noise
        while Windows == 5 and AppStatus == 0:
            basic.show_leds("""
                . . # . .
                . # # . .
                # . . # .
                . # # . .
                . . # . .
                """)
            basic.show_leds("""
                . . # . #
                . # # . .
                # . . # .
                . # # . .
                . . # . #
                """)
        # Noise
        while Windows == 6 and AppStatus == 0:
            Windows = 1
basic.forever(on_forever2)
