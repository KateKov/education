import React from 'react';

import AddTodo from './AddTodo/AddTodo.js';
import ListTodo from './ListTodo/ListTodo.js';
import Header from '../../components/Header/Header.js';
import Filter from '../../components/Filter/Filter.js';

const TodoApp = () => {
	return (
		<div>
			<Header />
			<Filter />
			<div className="content">
				<div className="card">
					<ListTodo />
				</div>
				<div className="card">
					<AddTodo />
				</div>
			</div>
		</div>
	)
};

export default TodoApp;