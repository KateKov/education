import React from 'react';
import Todo from '../Todo/Todo.js';

const TodoList = ({ todos, onTodoClick }) => (
	<ul className="table-view">
		{todos.map((todo, id) => (
			<Todo
				key={id}
				{...todo}
				onClick={() => onTodoClick(todo.id)}
				/>
		))}
	</ul>
);

export default TodoList;