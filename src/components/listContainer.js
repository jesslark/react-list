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
				<SubList listState={this.props.listState} consoleType="Android"/>
				<SubList listState={this.props.listState} consoleType="DS"/>
				<SubList listState={this.props.listState} consoleType="Wii"/>
				<SubList listState={this.props.listState} consoleType="Legacy"/>
			</div>
		);
	}
}