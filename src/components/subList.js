import React from 'react';
import ReactDOM from 'react';

import { GameInfo } from './gameInfo';


export class SubList extends React.Component {
	render() {
		let type = this.props.consoleType;
		return (
			<div className="subList">
				<h2>{this.props.consoleType} Games</h2>
				<ul>
	                {
	                	this.props.listState.map(function(arg) {
	                		return arg["console"] === type ? <li key={ arg["id"] }>{arg["gamename"]}</li> : null;
	                	})
	                }

	            </ul>
			</div>
		);
	}
}