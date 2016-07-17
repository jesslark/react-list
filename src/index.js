import React from 'react';
import ReactDOM from 'react-dom';

import { ListContainer } from './components/listContainer';

const startState = 
	[ 
        {
            id: 7,
            gamename: "Monument Valley",
            timesbeaten: 2,
            console: "Android",
            currentlyPlaying: false
        },
        {
            id: 11,
            gamename: "Sugar Sugar",
            timesbeaten: 0,
            console: "Android",
            currentlyPlaying: false
        },
        {
            id: 12,
            gamename: "Pokemon Go",
            timesbeaten: 0,
            console: "Android",
            currentlyPlaying: true
        },
        {
            id: 13,
            gamename: "LightBot",
            timesbeaten: 0,
            console: "Android",
            currentlyPlaying: false
        },
        {
            id: 1,
            gamename: "Bravely Default",
            timesbeaten: 1,
            console: "DS",
            currentlyPlaying: false
        },
        {
            id: 4,
            gamename: "Bravely Second",
            timesbeaten: 0,
            console: "DS",
            currentlyPlaying: true
        },
        {
            id: 9,
            gamename: "Kirby Canvas Curse",
            timesbeaten: 1,
            console: "DS",
            currentlyPlaying: false
        },
        {
            id: 10,
            gamename: "New Super Mario Bros DS",
            timesbeaten: 2,
            console: "DS",
            currentlyPlaying: false
        },
        {
            id: 8,
            gamename: "Sticker Star",
            timesbeaten: 0,
            console: "DS",
            currentlyPlaying: false
        },
        {
            id: 2,
            gamename: "Skyward Sword",
            timesbeaten: 0,
            console: "Wii",
            currentlyPlaying: false
        },
        {
            id: 3,
            gamename: "Pikmin",
            timesbeaten: 0,
            console: "Wii",
            currentlyPlaying: false
        },
        {
            id: 5,
            gamename: "Kirby's Epic Yarn",
            timesbeaten: 1,
            console: "Wii",
            currentlyPlaying: false
        },
        {
            id: 6,
            gamename: "Super Mario Bros",
            timesbeaten: 25,
            console: "NES",
            currentlyPlaying: false
        }
    ];

ReactDOM.render(
	<ListContainer listState={startState}/>,
	document.getElementById('listbox')
); 