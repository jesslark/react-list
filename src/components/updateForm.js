import React from 'react';
import ReactDOM from 'react';

export class UpdateForm extends React.Component {

	var EachGame = React.createClass({
		render: function() {
			var gameEntries = this.props.entries;

			function createGames(title) {
				return <li key={title.key}>{title.text}</li>
			}

			var listGames = gameEntries.map(createGames);

			return (
				<ul className="theList">
					{listGames}
				</ul>
			);
		}
	});

	var GamePlayList = React.createClass({
		getInitialState: function() {
			return {
				games: []
			};
		},
		addGame: function(e) {
			var gameArray = this.state.games;

			gameArray.push( 
				{
					text: this.userInput.value,
					key: Date.now()
				}
			);
			
			this.setState({
				games: gameArray
			});

			this.userInput.value = "";

			e.preventDefault();
		},
		render: function() {
			return (
					<div className="updateForm">
						<form onSubmit={this.addGame}>
							<input ref={ (arg) => this.userInput = arg}
								placeholder="Enter a title...">
							</input>
							<button type="submit">Add Game</button>
						</form>
				</div>
			);
		}
	});
}