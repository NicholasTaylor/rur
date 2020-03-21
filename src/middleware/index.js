import {INTRO_END} from '../constants/action-types';

const addTransition = (intro) => {
	intro.style.transition = '3s ease-out';
}

const allFade = (intro) => {
	intro.style.opacity = 0;
}

const removeAll = (intro) => {
	intro.style.display = 'none';
}

const pauseProm = (timeout) => {
	return new Promise ((resolve) => {setTimeout(resolve,timeout)})
}


export function intro({dispatch}) {
	return function(next){
		return function(action){
			if(action.type === INTRO_END){
				console.log('Testing');
				const intro = document.getElementById('intro');
				pauseProm(250)
					.then(()=>addTransition(intro))
					.then(()=>allFade(intro))
					.then(()=>pauseProm(600))
					.then(()=>removeAll(intro))
			}
			return next(action);
		}
	}
}