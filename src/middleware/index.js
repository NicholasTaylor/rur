import {INTRO_START, INTRO_END} from '../constants/action-types';

const introContFadeOut = (introContent) => {
	introContent.style.opacity = 0;
	introContent.style.transition = '3s ease-out';
}

const introContFadeIn = (introContent) => {
	introContent.style.opacity = 1;
}

const intro_02 = (introContent) => {
	introContent.innerText = 'What would you do if you were really free?';
}

const intro_03 = (introContent) => {
	introContent.innerHTML = '<img src="images/logo-rur-blue.png" class="logo" />';
}

const allFade = (intro) => {
	intro.style.opacity = 0;
	document.getElementsByTagName('body')[0].style.overflow = 'auto';
	document.getElementsByTagName('html')[0].style.overflow = 'auto';
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
			if(action.type === INTRO_START){
				const introContent = document.getElementById('intro-content');
				const intro = document.getElementById('intro');
				pauseProm(500)
					.then(()=>introContFadeOut(introContent))
					.then(()=>pauseProm(1500))
					.then(()=>intro_02(introContent))
					.then(()=>introContFadeIn(introContent))
					.then(()=>pauseProm(1500))
					.then(()=>introContFadeOut(introContent))
					.then(()=>pauseProm(1500))
					.then(()=>intro_03(introContent))
					.then(()=>introContFadeIn(introContent))
					.then(()=>pauseProm(1000))
					.then(()=>allFade(intro))
					.then(()=>pauseProm(1500))
					.then(()=>removeAll(intro))
			}
			if(action.type === INTRO_END){
				console.log('Testing');
				const intro = document.getElementById('intro');
				pauseProm(250)
					.then(()=>allFade(intro))
					.then(()=>pauseProm(500))
					.then(()=>removeAll(intro))
			}
			return next(action);
		}
	}
}