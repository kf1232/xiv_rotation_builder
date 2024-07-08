import icon_fire_in_red from './icons/fire-in-red.png'
import icon_fire_ii_in_red from './icons/fire-ii-in-red.png'
import creature_motif from './icons/creature-motif.png'
import weapon_motif from './icons/weapon-motif.png'
import hammer_stamp from './icons/hammer-stamp.png'
import blizzard_in_cyan from './icons/blizzard-in-cyan.png'
import blizzard_ii_in_cyan from './icons/blizzard-ii-in-cyan.png'
import landscape_motif from './icons/landscape-motif.png'
import holy_in_white from './icons/holy-in-white.png'
import comet_in_black from './icons/comet-in-black.png'
import rainbow_drip from './icons/rainbow-drip.png'
import star_prism from './icons/star-prism.png'

import tempera_coat from './icons/tempera-coat.png'
import smudge from './icons/smudge.png'
import living_muse from './icons/living-muse.png'
import mog_of_the_ages from './icons/mog-of-the-ages.png'
import steel_muse from './icons/steel-muse.png'
import subtractive_palette from './icons/subtractive-palette.png'
import scenic_muse from './icons/scenic-muse.png'
import tempera_grassa from './icons/tempera-grassa.png'

import icon_aero_in_green from './icons/aero-in-green.png'
import icon_water_in_blue from './icons/water-in-blue.png'
import pom_motif from './icons/pom-motif.png'
import wing_motif from './icons/wing-motif.png'
import pom_muse from './icons/pom-muse.png'
import winged_muse from './icons/winged-muse.png'
import icon_aero_ii_in_green from './icons/aero-ii-in-green.png'
import icon_water_ii_in_blue from './icons/water-ii-in-blue.png'
import hammer_motif from './icons/hammer-motif.png'
import striking_muse from './icons/striking-muse.png'
import stone_in_yellow from './icons/stone-in-yellow.png'
import thunder_in_magenta from './icons/thunder-in-magenta.png'
import stone_ii_in_yellow from './icons/stone-ii-in-yellow.png'
import thunder_ii_in_magenta from './icons/thunder-ii-in-magenta.png'
import starry_sky_motif from './icons/starry-sky-motif.png'
import starry_muse from './icons/starry-muse.png'
import hammer_brush from './icons/hammer-brush.png'
import polishing_hammer from './icons/polishing-hammer.png'
import claw_motif from './icons/claw-motif.png'
import maw_motif from './icons/maw-motif.png'
import clawed_muse from './icons/clawed-muse.png'
import fanged_muse from './icons/fanged-muse.png'
import retrubiution_of_the_madeen from './icons/retribution-of-the-madeen.png'

export const Pictomancer = {
    state: {
        "Aetherhues": 0,
        "Hyperphantasia": 0
    },
    spellsv2: {
        fire_in_red: {
            "name": "Fire in Red",
            "file": icon_fire_in_red,
            "level": 1,
            "potency": 440,
        },
        aero_in_Green: {
            "name": "Aero in Green",
            "file": icon_aero_in_green,
            "level": 5,
            "potency": 480,
        },
        water_in_blue: {
            "name": "Water in Blue",
            "file": icon_water_in_blue,
            "level": 15,
            "potency": 520,
        },

        fire_ii_in_red: {
            "name": "Fire II in Red",
            "file": icon_fire_ii_in_red,
            "level": 25,
            "potency": 120
        },
        aero_ii_in_green: {
            "name": "Aero II in Green",
            "file": icon_aero_ii_in_green,
            "level": 35,
            "potency": 140
        },
        water_ii_in_blue: {
            "name": "Water II in Blue",
            "file": icon_water_ii_in_blue,
            "level": 45,
            "potency": 160
        },
    },
    spells: [
        {
            "name": "Fire in Red",
            "file": icon_fire_in_red,
            "level": 1,
            "potency": 440,
        },
        {
            "name": "Fire II in Red",
            "file": icon_fire_ii_in_red,
            "level": 25,
            "potency": 120
        },
        {
            "name": "Creature Motif",
            "file": creature_motif,
            "level": 30,
            "potency": 0
        },
        {
            "name": "Weapon Motif",
            "file": weapon_motif,
            "level": 50,
            "potency": 0
        },
        {
            "name": "Hammer Stamp",
            "file": hammer_stamp,
            "level": 50,
            "potency": 560
        },
        {
            "name": "Blizzard in Cyan",
            "file": blizzard_in_cyan,
            "level": 60,
            "potency": 800
        },
        {
            "name": "Blizzard II in Cyan",
            "file": blizzard_ii_in_cyan,
            "level": 60,
            "potency": 240
        },
        {
            "name": "Landscape Motif",
            "file": landscape_motif,
            "level": 70,
            "potency": 0
        },
        {
            "name": "Holy in White",
            "file": holy_in_white,
            "level": 80,
            "potency": 520
        },
        {
            "name": "Comet in Black",
            "file": comet_in_black,
            "level": 90,
            "potency": 880
        },
        {
            "name": "Rainbow Drip",
            "file": rainbow_drip,
            "level": 92,
            "potency": 1000
        },
        {
            "name": "Star Prism",
            "file": star_prism,
            "level": 100,
            "potency": 1400
        },
    ],
    abilities: [],
    unassignable: []
}

export const pictomancer = [
    {
        "isAssignable": true,
        "name": "Fire in Red",
        "type": "Spell",
        "file": icon_fire_in_red,
        "level": 1,
        "potency": 440,
        "nextSpell": "Aero in Green"
    },
    {
        "isAssignable": true,
        "name": "Fire II in Red",
        "type": "Spell",
        "file": icon_fire_ii_in_red,
        "level": 25,
        "potency": 120
    },
    {
        "isAssignable": true,
        "name": "Creature Motif",
        "file": creature_motif,
        "level": 30,
        "potency": 0
    },
    {
        "isAssignable": true,
        "name": "Weapon Motif",
        "file": weapon_motif,
        "level": 50,
        "potency": 0
    },
    {
        "isAssignable": true,
        "name": "Hammer Stamp",
        "file": hammer_stamp,
        "level": 50,
        "potency": 560
    },
    {
        "isAssignable": true,
        "name": "Blizzard in Cyan",
        "file": blizzard_in_cyan,
        "level": 60,
        "potency": 800
    },
    {
        "isAssignable": true,
        "name": "Blizzard II in Cyan",
        "file": blizzard_ii_in_cyan,
        "level": 60,
        "potency": 240
    },
    {
        "isAssignable": true,
        "name": "Landscape Motif",
        "file": landscape_motif,
        "level": 70,
        "potency": 0
    },
    {
        "isAssignable": true,
        "name": "Holy in White",
        "file": holy_in_white,
        "level": 80,
        "potency": 520
    },
    {
        "isAssignable": true,
        "name": "Comet in Black",
        "file": comet_in_black,
        "level": 90,
        "potency": 880
    },
    {
        "isAssignable": true,
        "name": "Rainbow Drip",
        "file": rainbow_drip,
        "level": 92,
        "potency": 1000
    },
    {
        "isAssignable": true,
        "name": "Star Prism",
        "file": star_prism,
        "level": 100,
        "potency": 1400
    },


    {
        "isAssignable": true,
        "name": "Tempera Coat",
        "file": tempera_coat,
        "level": 10,
        "potency": 0
    },
    {
        "isAssignable": true,
        "name": "Smudge",
        "file": smudge,
        "level": 20,
        "potency": 0
    },
    {
        "isAssignable": true,
        "name": "Living Muse",
        "file": living_muse,
        "level": 30,
        "potency": 0
    },
    {
        "isAssignable": true,
        "name": "Mog of the Ages",
        "file": mog_of_the_ages,
        "level": 30,
        "potency": 1300
    },
    {
        "isAssignable": true,
        "name": "Steel Muse",
        "file": steel_muse,
        "level": 50,
        "potency": 0
    },
    {
        "isAssignable": true,
        "name": "Subtractive Palette",
        "file": subtractive_palette,
        "level": 60,
        "potency": 0
    },
    {
        "isAssignable": true,
        "name": "Scenic Muse",
        "file": scenic_muse,
        "level": 70,
        "potency": 0
    },
    {
        "isAssignable": true,
        "name": "Tempera Grassa",
        "file": tempera_grassa,
        "level": 88,
        "potency": 0
    },


    {
        "isAssignable": false,
        "name": "Aero in Green",
        "file": icon_aero_in_green,
        "level": 5,
        "potency": 480,
        "nextSpell": "Water in Blue"
    },
    {
        "isAssignable": false,
        "name": "Water in Blue",
        "file": icon_water_in_blue,
        "level": 15,
        "potency": 520,
        "nextSpell": null
    },
    {
        "isAssignable": false,
        "name": "Pom Motif",
        "file": pom_motif,
        "level": 30,
        "potency": 0
    },
    {
        "isAssignable": false,
        "name": "Wing Motif",
        "file": wing_motif,
        "level": 30,
        "potency": 0
    },
    {
        "isAssignable": false,
        "name": "Pom Muse",
        "file": pom_muse,
        "level": 30,
        "potency": 1100
    },
    {
        "isAssignable": false,
        "name": "Winged Muse",
        "file": winged_muse,
        "level": 30,
        "potency": 1100
    },
    {
        "isAssignable": false,
        "name": "Aero II in Green",
        "file": icon_aero_ii_in_green,
        "level": 35,
        "potency": 140
    },
    {
        "isAssignable": false,
        "name": "Water II in Blue",
        "file": icon_water_ii_in_blue,
        "level": 45,
        "potency": 160
    },
    {
        "isAssignable": false,
        "name": "Hammer Motif",
        "file": hammer_motif,
        "level": 50,
        "potency": 0
    },
    {
        "isAssignable": false,
        "name": "Striking Muse",
        "file": striking_muse,
        "level": 50,
        "potency": 0
    },
    {
        "isAssignable": false,
        "name": "Stone in Yellow",
        "file": stone_in_yellow,
        "level": 60,
        "potency": 840
    },
    {
        "isAssignable": false,
        "name": "Thunder in Magenta",
        "file": thunder_in_magenta,
        "level": 60,
        "potency": 880
    },
    {
        "isAssignable": false,
        "name": "Stone II in Yellow",
        "file": stone_ii_in_yellow,
        "level": 60,
        "potency": 260
    },
    {
        "isAssignable": false,
        "name": "Thunder II in Magenta",
        "file": thunder_ii_in_magenta,
        "level": 60,
        "potency": 280
    },
    {
        "isAssignable": false,
        "name": "Starry Sky Motif",
        "file": starry_sky_motif,
        "level": 70,
        "potency": 0
    },
    {
        "isAssignable": false,
        "name": "Starry Muse",
        "file": starry_muse,
        "level": 70,
        "potency": 0
    },
    {
        "isAssignable": false,
        "name": "Hammer Brush",
        "file": hammer_brush,
        "level": 86,
        "potency": 620
    },
    {
        "isAssignable": false,
        "name": "Polishing Hammer",
        "file": polishing_hammer,
        "level": 86,
        "potency": 680
    },
    {
        "isAssignable": false,
        "name": "Claw Motif",
        "file": claw_motif,
        "level": 96,
        "potency": 0
    },
    {
        "isAssignable": false,
        "name": "Maw Motif",
        "file": maw_motif,
        "level": 96,
        "potency": 0
    },
    {
        "isAssignable": false,
        "name": "Clawed Muse",
        "file": clawed_muse,
        "level": 96,
        "potency": 1100
    },
    {
        "isAssignable": false,
        "name": "Fanged Muse",
        "file": fanged_muse,
        "level": 96,
        "potency": 1100
    },
    {
        "isAssignable": false,
        "name": "Retribution of the Madeen",
        "file": retrubiution_of_the_madeen,
        "level": 96,
        "potency": 1400
    }
]