input.onButtonPressed(Button.A, function () {
    if (STATO == 0) {
        STATO += 2
        basic.showString("VIA")
    } else {
        if (STATO == 2) {
            STATO += 1
            basic.showString("PRONTI")
        } else {
            STATO = 0
            basic.showString("PARTENZA")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (STATO == 0) {
        STATO += 1
        basic.showString("PARTENZA")
    } else {
        if (STATO == 1) {
            STATO += 2
            basic.showString("VIA")
        } else {
            STATO = 0
            basic.showString("PRONTI")
        }
    }
})
let STATO = 0
STATO = 0
basic.showString("PRONTI")
