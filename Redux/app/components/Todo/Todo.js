import React from 'react';

const Todo = ({ onClick, completed, text }) => (
	<li className="table-view-cell"
		onClick={onClick}
		style= {{ textDecoration: completed ? 'line-through' : 'none' }}
		>
		{text}
	</li>
);

export default Todo;