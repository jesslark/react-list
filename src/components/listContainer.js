import React from 'react';
import ReactDOM from 'react';

import { UpdateForm } from './updateForm';
import { SubList } from './subList';

export class ListContainer extends React.Component {
	render() {
		return (
			<div className="listContainer">
				<h1>Video Game Library</h1>
				<UpdateForm />
				<SubList listState={this.props.listState} console="android"/>
				<SubList listState={this.props.listState} console="handheld"/>
				<SubList listState={this.props.listState} console="home"/>
			</div>
		);
	}
}