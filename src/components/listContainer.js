import React from 'react';
import ReactDOM from 'react';

import { SubList } from './subList';

export class ListContainer extends React.Component {
	render() {
		return (
			<div className="listContainer">
				<SubList listState={this.props.listState} />
				<div className="legend">
					Finished Once: <i className="fa fa-star fa-lg stars1" aria-hidden="true"></i>
					Finished Twice: <i className="fa fa-star fa-lg stars2" aria-hidden="true"></i>
					Finished Many Times: <i className="fa fa-star fa-lg stars3" aria-hidden="true"></i>

					Currently Playing: <i className="fa fa-gamepad fa-2x playingcolor" aria-hidden="true"></i>
					Not Playing: <i className="fa fa-gamepad fa-2x notplayingcolor" aria-hidden="true"></i>
				</div>
			</div>
		);
	}
}