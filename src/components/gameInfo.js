import React from 'react';
import ReactDOM from 'react';

export class GameInfo extends React.Component {
	render() {
		return (
			<li className="gameInfo">
                   { this.props.title } 
                   <span className="console">{ this.props.console }</span>
                   <span className="completions">{ this.props.beatNum }</span>
                   <span className="playing">{ this.props.playing }</span>
			</li>
		);
	}
}