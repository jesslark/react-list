import React from 'react';
import ReactDOM from 'react';

import { GameInfo } from './gameInfo';


export class SubList extends React.Component {
	render() {
		return (
			<div className="subList">
				<ul>
	                {
	                	this.props.listState.map(function(arg) {
	                		return <GameInfo 
										key={arg["id"]} 
										title={arg["gamename"]} 
										console={arg["console"]} 
										beatNum={arg["timesbeaten"]} 
										playing={arg["currentlyPlaying"]} 
										/>
	                	})   
	                }

	            </ul>
			</div>
		);
	}
}