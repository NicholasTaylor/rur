import {SCROLL_CHANGE, INTRO_START, INTRO_END} from '../constants/action-types';

export function scroll_change(){
	return {type: SCROLL_CHANGE};
}

export function intro_start(){
	return {type: INTRO_START};
}

export function intro_end(event){
	return {type: INTRO_END};
}

