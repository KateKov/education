
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import todos from './reducers/todos.js';
import visibilityFilter from './reducers/visibilityFilter.js';

import TodoApp from './containers/TodoApp.js';

export default class App {
	constructor() {
		const todoApp = combineReducers({
			todos,
			visibilityFilter
		});

		this.store = createStore(todoApp);
	}

	init() {
		ReactDOM.render(
			<Provider store={this.store}>
				<TodoApp />
			</Provider>,
			document.getElementById('root')
		);
	}
}