import React from 'react';
import ReactDOM from 'react';

export class GameInfo extends React.Component {
	render() {
		return (
			<div className="gameInfo">
                    { this.props.title }
			</div>
		);
	}
}