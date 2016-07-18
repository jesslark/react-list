import React from 'react';
import ReactDOM from 'react';

export class GameInfo extends React.Component {
	render() {
		var stars = "completions";
		if(this.props.beatNum === "0") {
			stars="completions stars0";
		} else if(this.props.beatNum === "1") {
			stars="completions stars1";
		} else if(this.props.beatNum === "2") {
			stars="completions stars2";
		} else if(this.props.beatNum === "3") {
			stars="completions stars3";
		}
		return (
			<li className="gameInfo">
                   <span className="gameTitle">{ this.props.title }</span>
                   <span className={ this.props.playing === "playing" ? "playing" : "notplaying" }><i className="fa fa-gamepad fa-2x" aria-hidden="true"></i></span>
                   <span className={ stars }><i className="fa fa-star fa-lg" aria-hidden="true"></i></span>
                   <span className="console">{ this.props.console }</span>
			</li>
		);
	}
}