def on_received_number(receivedNumber):
    global status
    status = 1
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    radio.send_number(1)
input.on_button_pressed(Button.A, on_button_pressed_a)

status = 0
led.set_brightness(100)
status = 0
radio.set_group(1)

def on_forever():
    global status
    if status == 0:
        led.toggle(0, 0)
        basic.pause(1000)
    elif status == 1:
        led.set_brightness(255)
        basic.show_icon(IconNames.YES)
        basic.pause(2000)
        status = 0
        led.set_brightness(100)
basic.forever(on_forever)
