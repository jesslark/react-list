import React from 'react';
import ReactDOM from 'react';

import { GameInfo } from './gameInfo';


export class SubList extends React.Component {
	render() {
		return (
			<div className="subList">
				{ 
				<ul>
	                {
	                	this.props.listState.map(function(arg) {
	                    	return <li key={ arg["id"] }>{arg["gamename"]}</li>;
	                	})
	                }
	            </ul>
	        	}
			</div>
		);
	}
}