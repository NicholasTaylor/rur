import {SCROLL_CHANGE} from '../constants/action-types';

const stateInit = {
	scrollNumber: 0
}

function rootReducer (state = stateInit, action){
	if (action.type === SCROLL_CHANGE){
		const tempObj = {...state};
		tempObj.scrollNumber = document.body.scrollTop || document.documentElement.scrollTop;
		return Object.assign({},state,tempObj);
	}
	return state;
}

export default rootReducer;