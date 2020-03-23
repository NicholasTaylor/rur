import React from 'react';

function TopNav(props){
	return(
		<nav 
		  id="nav-top"
		  style={{
		    animationName:props.navStatus,
		    fontFamily: props.fontFamily
		  }}
		>
		  <div 
		    id="nav-title"
		  >
		    {props.siteName}
		  </div>
		  <div 
		    id="nav-cta"
		  >
		    <a 
		      href={props.ctaURL}
		    >
		      {props.ctaCopy}
		    </a>
		  </div>
		</nav>
	)
}

export default TopNav;