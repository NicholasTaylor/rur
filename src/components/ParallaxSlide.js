import React from 'react';
import {Parallax, Background} from 'react-parallax';
import {config} from '../constants/config';

function ParallaxSlide(props) {
  const fontHead = config.fontFamilyHead ? config.fontFamilyHead : '"Helvetica Neue", Helvetica, Arial, sans-serif';
  const fontBody = config.fontFamilyBody ? config.fontFamilyBody : '"Helvetica Neue", Helvetica, Arial, sans-serif';
	return(
		<div
			id={props.slideName}
			className={['slide ', props.colorMode === 'dark' ? 'slideDark' : 'slideLight'].join('')}
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
                  className={props.paraType === 'full' ? '' : 'paraSlideBgPartial'}
                />
            </Background>
            <div
            	className="paraSlideContent"
            >
              <h2
                className="paraSlideSubheadTop"
                style={{
                  fontFamily: fontHead
                }}
              >
                {props.paraConSubTop}
              </h2>
              <h1
                className="paraSlideHead"
                style={{
                  fontFamily: fontHead
                }}
              >
                {props.paraConHead}
              </h1>
              <h1
                className="paraSlideLogo"
                style={{
                  fontFamily: fontHead
                }}
              >
                {props.paraConLogo}
              </h1>
              <p
                className="paraSlideSubheadBottom"
                style={{
                  fontFamily: fontHead
                }}
              >
                {props.paraConSubBottom}
              </p>
              <p
                className="paraSlideCopy"
                style={{
                  fontFamily: fontBody
                }}
              >
                {props.paraConCopy}
              </p>
            </div>
          </Parallax>
        </div>
	)
}

export default ParallaxSlide;