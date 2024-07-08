import icon_fire_ii_in_red from '../assets/pictomancer/icons/fire-ii-in-red.png'
import icon_aero_ii_in_green from '../assets/pictomancer/icons/aero-ii-in-green.png'
import icon_water_ii_in_blue from '../assets/pictomancer/icons/water-ii-in-blue.png'

const fire_ii_in_red = {
    "name": "Fire II in Red",
    "file": icon_fire_ii_in_red,
    "level": 25,
    "potency": 120
}

const aero_ii_in_Green = {
    "name": "Aero II in Green",
    "file": icon_aero_ii_in_green,
    "level": 35,
    "potency": 140
}

const water_ii_in_blue = {
    "name": "Water II in Blue",
    "file": icon_water_ii_in_blue,
    "level": 45,
    "potency": 160
}

export const FireIIInRed = (AetherhuesState, HyperphantasiaState) => {
    switch(AetherhuesState) {
        case 0: {
            return fire_ii_in_red
        }
        case 1: {
            return aero_ii_in_Green
        }
        case 2: {
            return water_ii_in_blue
        }
    }
}