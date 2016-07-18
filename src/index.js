import React from 'react';
import ReactDOM from 'react-dom';

import { ListContainer } from './components/listContainer';
    
var gameCount = 0;

var AddGameToList = React.createClass({
    getInitialState: function() {
        return {
            games: []
        };
    },
    addGame: function(e) {
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
        this.userFinished.value = "never finished";
        this.userConsole.value = "";
        this.userPlayStatus.value = "playing";
        e.preventDefault();
    },
    render: function() {
        return (
            <div> 
                <h1>Favorite Video Game Library</h1>   
                <div className="updateForm">
                    <form onSubmit={this.addGame}>
                        <input ref={ (arg) => this.userTitle = arg}
                            placeholder="Enter a title...">
                        </input>
                        <input ref={ (arg) => this.userConsole = arg}
                            placeholder="Enter the console...">
                        </input>
                        <select name="completions" ref={ (arg) => this.userFinished = arg}>
                            <option value="never finished">0</option>
                            <option value="finished once">1</option>
                            <option value="finished twice">2</option>
                            <option value="finished many times">3+</option>
                        </select>

                        <select name="playStatus" ref={ (arg) => this.userPlayStatus = arg}>
                            <option value="playing">Currently Playing</option>
                            <option value="not playing">Not Playing</option>
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