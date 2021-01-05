const INITIAL_STATE = {
	panelClicked: false,
	indexClicked: '0',
};

const extendableVideoReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SET_PANEL_CLICKED':
			return {
				...state,
				panelClicked: action.payload,
			};
		case 'SET_INDEX_CLICKED':
			return {
				...state,
				indexClicked: action.payload,
			};
		default:
			return state;
	}
};

export default extendableVideoReducer;
