import todo from './todo.js';

const getState = () => {
	let baseState = localStorage.getItem('todos');
	if (baseState) {
		return JSON.parse(baseState);
	} else {
		localStorage.setItem('todos', JSON.stringify([]));
		return [];
	}
};

const todos = (state, action) => {
	if(!state) state = getState();

	switch(action.type) {
		case 'ADD_TODO':
			action.id = state.length;
			console.log(action.id);
			state = [
				...state,
				todo(undefined, action)
			];
			break;
		case 'TOGGLE_TODO':
			state = state.map(t => todo(t, action));
			break;
	}

	localStorage.setItem('todos', JSON.stringify(state));
	return state;
};

export default todos;