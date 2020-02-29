import React from 'react';
import {config} from '../constants/config';

export function WebFonts(){
	if(config.fontURL){
		return(
			<link
				rel="stylesheet" 
				href={config.fontURL}
			/>
		)
	}
}