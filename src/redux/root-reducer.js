import { combineReducers } from 'redux';

import extendableVideoReducer from './extendable-video/extendable-video.reducer';

export default combineReducers({
	extendableVideo: extendableVideoReducer,
});
