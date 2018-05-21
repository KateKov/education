import React from 'react';
import { connect }  from 'react-redux';
import Link  from '../../../components/Link/Link.js';

const mapStateToLinkProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter,
		className: ownProps.className
	};
};

const mapDispatchToLinkProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch({
				type: 'SET_VISIBILITY_FILTER',
				filter: ownProps.filter
			});
		}
	}
};

const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);
export default FilterLink;