import React from 'react';
import {Parallax, Background} from 'react-parallax';
import {config} from '../constants/config';

function ParallaxSlide(props) {
  const fontHead = config.fontFamilyHead ? config.fontFamilyHead : '"Helvetica Neue", Helvetica, Arial, sans-serif';
  const fontBody = config.fontFamilyBody ? config.fontFamilyBody : '"Helvetica Neue", Helvetica, Arial, sans-serif';
  const classColor = props.colorMode === 'dark' ? 'slideDark' : 'slideLight';
  const classType = props.bgType === 'full' ? 'bgFull' : 'bgPartial';
  const classHorizontal = (val)=> {
    if (val==='left'){
      return 'horizLeft'
    } else if (val==='right'){
      return 'horizRight'
    } else {
      return 'horizCenter'
    }
  }
  const classVertical = (val)=> {
    if (val==='top'){
      return 'vertTop'
    } else if (val==='bottom'){
      return 'vertBottom'
    } else {
      return 'vertMiddle'
    }
  }
  const classCaption = props.copyCaption ? 'captionOn' : 'captionOff';
	return(
		<div
			id={props.slideName}
			className={['slide', classColor, classType].join(' ')}
        >
          <div
            className={classType}
          >
            <div
              className={classHorizontal(props.copyHorizontal)}
            >
              <div
                className={classVertical(props.copyVertical)}
              >
                <Parallax
                  strength={props.paraStrength}
                  style={{
                    height:'100vh'
                  }}
                  className={classCaption}
                >
                  <div
                    className="paraFilter"
                  >
                  </div>
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
                    <h1
                      className="paraSlideHead"
                      style={{
                        fontFamily: fontBody
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
            </div>
          </div>
        </div>
	)
}

export default ParallaxSlide;