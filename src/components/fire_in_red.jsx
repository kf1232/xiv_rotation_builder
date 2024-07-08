import icon_fire_in_red from '../assets/pictomancer/icons/fire-in-red.png'
import icon_aero_in_green from '../assets/pictomancer/icons/aero-in-green.png'
import icon_water_in_blue from '../assets/pictomancer/icons/water-in-blue.png'

const fire_in_red = {
    "name": "Fire in Red",
    "file": icon_fire_in_red,
    "level": 1,
    "potency": 440,
}

const aero_in_Green = {
    "name": "Aero in Green",
    "file": icon_aero_in_green,
    "level": 5,
    "potency": 480,
}

const water_in_blue = {
    "name": "Water in Blue",
    "file": icon_water_in_blue,
    "level": 15,
    "potency": 520,
}

export const FireInRed = (AetherhuesState, HyperphantasiaState) => {
    switch(AetherhuesState) {
        case 0: {
            return fire_in_red
        }
        case 1: {
            return aero_in_Green
        }
        case 2: {
            return water_in_blue
        }
    }
}