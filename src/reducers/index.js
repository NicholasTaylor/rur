import {SCROLL_CHANGE} from '../constants/action-types';

const stateInit = {
	scrollTop: 0,
	scrollBottom: window.innerHeight
}

function rootReducer (state = stateInit, action){
	if (action.type === SCROLL_CHANGE){
		const tempObj = {...state};
		tempObj.scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		const innerH = window.innerHeight;
		tempObj.scrollBottom = tempObj.scrollTop + innerH
		return Object.assign({},state,tempObj);
	}
	return state;
}

export default rootReducer;