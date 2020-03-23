import {SCROLL_CHANGE, INTRO_END} from '../constants/action-types';

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

	if(action.type === INTRO_END){
		if(action.payload.animationName === 'introAnim'){
			const intro = document.getElementById('intro');
			intro.style.animationName = 'fadeOut';
		}
	}
	return state;
}

export default rootReducer;