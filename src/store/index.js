import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import {intro} from '../middleware/index';

const store = createStore(
	rootReducer,
	applyMiddleware(intro)
);

export default store;