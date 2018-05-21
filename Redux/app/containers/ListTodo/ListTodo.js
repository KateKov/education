import React from 'react';
import {connect} from 'react-redux';
import TodoList from '../../../components/TodoList/TodoList.js';

export default class ListTodo extends React.Component {
	constructor(props) {
		super(props);
	}

	getVisibleTodos = (todos, filter) => {
		switch(filter) {
			case 'SHOW_ALL':
				return todos;
			case 'SHOW_COMPLETED':
				return todos.filter(
					t => t.completed
				);
			case 'SHOW_ACTIVE':
				return todos.filter(
					t => !t.completed
				);
		}
	};

	render() {
		return (
			<TodoList todos={this.getVisibleTodos(this.props.todos, this.props.visibilityFilter)} onTodoClick={(id) => this.props.toggleTodo(id) } />
		)
	}
}

const mapStateTodoListProps = (state) => {
	return state;
};

const mapDispatchTodoListProps = (dispatch) => {
	return {
		toggleTodo: (id) => {
			dispatch({type: 'TOGGLE_TODO', id });
		}
	};
};

export default connect(mapStateTodoListProps, mapDispatchTodoListProps)(ListTodo);