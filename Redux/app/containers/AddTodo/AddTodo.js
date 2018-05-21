import React from 'react';
import {connect} from 'react-redux';

export default class AddTodo extends React.Component {
	constructor(props) {
		super(props);

		this.input = null;
	}

	validate(e) {
		e.preventDefault();
		this.props.addTodo(this.input.value);
		this.input.value = '';
	}

	render() {
		return (
			<form onSubmit={(e) => this.validate(e) }>
				<input type="text" placeholder="Some todo" ref={(node) => {
					this.input = node;
				}} />
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (text) => {
			dispatch({type: 'ADD_TODO', text });
		}
	};
};

export default connect(null, mapDispatchToProps)(AddTodo);