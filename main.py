def on_button_pressed_ab():
    global SystemDynamic
    if SystemDynamic != 0:
        SystemDynamic = 0
    else:
        power.low_power_request(LowPowerMode.CONTINUE)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

SystemDynamic = 0
Windows = 1
SystemDynamic = 1
power.low_power_enable(LowPowerEnable.PREVENT)

def on_forever():
    while SystemDynamic == 0:
        pass
basic.forever(on_forever)
