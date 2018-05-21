import React from 'react';
import FilterLink from '../../containers/FilterLink/FilterLink.js';

export default class Filter extends React.Component {
	render() {
		return (
			<nav className="bar bar-tab">
				<FilterLink className="tab-item" filter='SHOW_ALL'>
					<span className="icon icon-list"></span>
					<span className="tab-label">All</span>
				</FilterLink>
				<FilterLink className="tab-item" filter='SHOW_ACTIVE'>
					<span className="icon icon-star"></span>
					<span className="tab-label">Active</span>
				</FilterLink>
				<FilterLink className="tab-item" filter='SHOW_COMPLETED'>
					<span className="icon icon-star-filled"></span>
					<span className="tab-label">Completed</span>
				</FilterLink>
			</nav>
		)
	}
}