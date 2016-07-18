import React from 'react';
import ReactDOM from 'react';

//import { UpdateForm } from './updateForm';
import { SubList } from './subList';

export class ListContainer extends React.Component {
	render() {
		return (
			<div className="listContainer">
				<SubList listState={this.props.listState} />
				 
			</div>
		);
	}
}