import React from 'react';
import ReactDOM from 'react';

export class Legend extends React.Component {
	render() {
		return (
			<i className="fa fa-gamepad fa-2x playing" aria-hidden="true"></i>
			<i className="fa fa-gamepad fa-2x notplaying" aria-hidden="true"></i>
			<i className="fa fa-star fa-lg stars1" aria-hidden="true"></i>
			<i className="fa fa-star fa-lg stars2" aria-hidden="true"></i>
			<i className="fa fa-star fa-lg stars3" aria-hidden="true"></i>
		);
	}
}