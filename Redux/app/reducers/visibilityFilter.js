const getState = () => {
	let baseState = localStorage.getItem('filter');
	if (baseState) {
		return JSON.parse(baseState);
	} else {
		localStorage.setItem('filter', JSON.stringify('SHOW_ALL'));
		return 'SHOW_ALL';
	}
};

const visibilityFilter = (state, action) => {
	if(!state) state = getState();

	switch(action.type) {
		case 'SET_VISIBILITY_FILTER':
			state = action.filter;
			localStorage.setItem('filter', JSON.stringify(state));
	}

	return state;
};

export default visibilityFilter;