import {SCROLL_CHANGE, INTRO_END, INTRO_SKIP} from '../constants/action-types';

const stateInit = {
	scrollTop: 0,
	scrollBottom: window.innerHeight,
	slidePos: [],
	navStatus: 'navOff'
}

function rootReducer (state = stateInit, action){

	if (action.type === SCROLL_CHANGE){
		const tempObj = {...state};
		tempObj.scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		const innerH = window.innerHeight;
		tempObj.scrollBottom = tempObj.scrollTop + innerH
		tempObj.slidePos = [];
		tempObj.navStatus = tempObj.scrollTop > innerH ? 'navOn' : 'navOff'
		return Object.assign({},state,tempObj);
		}
	return state;
}

export default rootReducer;