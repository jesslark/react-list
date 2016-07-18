// Jess Mear
// React Game Library
// Features Desired:
    // sorting entries
    // deleting entries
    // editing text
    // changing times-finished or currently-playing by clicking
    // styling the dropdowns

import React from 'react';
import ReactDOM from 'react-dom';

import { ListContainer } from './components/listContainer';

    
var gameCount = 0;
var gameCompleteCount = 0;

var AddGameToList = React.createClass({
    getInitialState: function() {
        return {
            games: []
        };
    },
    addGame: function(e) {
        if(this.userTitle.value === "") {
            e.preventDefault();
            return;
        }
        if(this.userFinished.value !== "0") {
            gameCompleteCount++;
        }
        var gameArray = this.state.games;
        gameCount++;
        gameArray.push( 
            {
                gamename: this.userTitle.value,
                id: gameCount,
                timesbeaten: this.userFinished.value,
                console: this.userConsole.value,
                currentlyPlaying: this.userPlayStatus.value
            }
        );
        
        this.setState({
            games: gameArray
        });

        this.userTitle.value = "";
        this.userFinished.value = "0";
        this.userConsole.value = "";
        this.userPlayStatus.value = "playing";
        e.preventDefault();
    },
    render: function() {
        return (
            <div> 
                <h1>Video Game Library</h1> 
                <h3>{ gameCount } Games, { gameCompleteCount } Completed</h3>   
                <div className="updateForm">
                    <form onSubmit={this.addGame}>
                        <input ref={ (arg) => this.userTitle = arg }
                            placeholder="Game title...">
                        </input>
                        <input ref={ (arg) => this.userConsole = arg }
                            placeholder="Console...">
                        </input>
                        <select name="completions" ref={ (arg) => this.userFinished = arg}>
                            <option value="0">Never Finished</option>
                            <option value="1">Finished Once</option>
                            <option value="2">Finished Twice</option>
                            <option value="3">Finished Many Times</option>
                        </select>

                        <select name="playStatus" ref={ (arg) => this.userPlayStatus = arg }>
                            <option value="playing">Currently Playing</option>
                            <option value="notplaying">Not Playing</option>
                        </select>

                        <button type="submit">Add Game</button>
                    </form>
                </div>
                <ListContainer listState={this.state.games}/>
            </div>
        );
    }
});

ReactDOM.render(
    <AddGameToList />,
	document.getElementById('listbox')
); 