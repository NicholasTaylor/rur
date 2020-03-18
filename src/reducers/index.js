import {SCROLL_CHANGE} from '../constants/action-types';

const stateInit = {
	scrollTop: 0,
	scrollBottom: window.innerHeight,
	slidePos: []
}

function rootReducer (state = stateInit, action){

	function getOpac(topDist,botDist,zeroZone,hundZone){
	  if ( (topDist >= (zeroZone * -1)) || (botDist <= zeroZone) ){
	    return 0;
	  } else if ( (topDist < (hundZone * -1)) && (botDist > hundZone) ){
	    return 1;
	  } else if ( (topDist > (hundZone * -1)) && (topDist < (zeroZone * -1)) ) {
	    return ((topDist * -1) / (hundZone - zeroZone)) - 1;
	  } else {
	    return (botDist / (hundZone - zeroZone)) - 1;
	  }
	}

	function getOpac(currentSlide,scrollTop,scrollBottom){
	    const topDist = currentSlide.offsetTop - scrollBottom;
	    const botDist = (currentSlide.offsetTop + currentSlide.offsetHeight) - scrollTop;
	    const id = currentSlide.id;
	    const zeroZone = Math.floor(.05 * window.innerHeight);
	    const hundZone = Math.floor(.1 * window.innerHeight);
		if ( (topDist >= (zeroZone * -1)) || (botDist <= zeroZone) ){
			return 0;
		} else if ( (topDist < (hundZone * -1)) && (botDist > hundZone) ){
			return 1;
		} else if ( (topDist > (hundZone * -1)) && (topDist < (zeroZone * -1)) ) {
			return ((topDist * -1) / (hundZone - zeroZone)) - 1;
		} else {
			return (botDist / (hundZone - zeroZone)) - 1;
		}
	}

	if (action.type === SCROLL_CHANGE){
		const tempObj = {...state};
		tempObj.scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		const innerH = window.innerHeight;
		tempObj.scrollBottom = tempObj.scrollTop + innerH
		const slideCollection = document.getElementsByClassName('slide');
		tempObj.slidePos = [];
		for (let i = 0; i < slideCollection.length; i++){
			const currentSlide = slideCollection[i];
			const currentId = currentSlide.id;
			const currentTop = currentSlide.offsetTop;
			const slideArr = tempObj.slidePos;
			const currentHeight = currentSlide.offsetHeight;
			const currentOpac = getOpac(currentSlide,tempObj.scrollTop,tempObj.scrollBottom);
			slideArr.push({
				id:currentId,
				top:currentTop,
				height:currentHeight,
				opac:currentOpac
			});
		}
		return Object.assign({},state,tempObj);
	}
	return state;
}

export default rootReducer;