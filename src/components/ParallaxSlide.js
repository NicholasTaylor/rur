import React from 'react';
import {Parallax, Background} from 'react-parallax';

function ParallaxSlide(props) {
	return(
		<div
			id={props.slideName}
        >
          <Parallax
            strength={props.paraStrength}
            style={{
              height:'100vh'
            }}
          >
            <Background
            >
                <img 
                	src={props.paraBgSrc} 
                	alt={props.paraBgAlt} 
                />
            </Background>
            <div
            	className="paraSlideContent"
            >
              <h2
                className="paraSlideSubheadTop"
              >
                {props.paraConSubTop}
              </h2>
              <h1
                className="paraSlideHead"
              >
                {props.paraConHead}
              </h1>
              <h1
                className="paraSlideLogo"
              >
                {props.paraConLogo}
              </h1>
              <p
                className="paraSlideSubheadBottom"
              >
                {props.paraConSubBottom}
              </p>
              <p
                className="paraSlideCopy"
              >
                {props.paraConCopy}
              </p>
            </div>
          </Parallax>
        </div>
	)
}

export default ParallaxSlide;