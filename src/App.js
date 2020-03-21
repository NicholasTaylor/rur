import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {scroll_change,intro_end} from './actions/index';
import {WebFonts, FontFamilyHead, FontFamilyBody} from './components/fonts';
import {siteContent} from './constants/content';
import {config} from './constants/config';
import ParallaxSlide from './components/ParallaxSlide';

class App extends React.Component {

  componentDidMount(){
    window.addEventListener('animationend',(e)=>this.props.intro_end(e))
  }

  componentWillUnmount(){
    window.removeEventListener('animationend',(e)=>this.props.intro_end(e))
  }

  renderParallaxSlide(i){
    const arr = Object.assign({},siteContent);
    const tempObj = arr[i];
    return(
      <ParallaxSlide
        slideName={tempObj.slideName}
        paraType={tempObj.paraType}
        colorMode={tempObj.colorMode}
        paraStrength={tempObj.paraStrength}
        paraBgSrc={tempObj.paraBgSrc}
        paraBgAlt={tempObj.paraBgAlt}
        paraConSubTop={tempObj.paraConSubTop}
        paraConLogo={tempObj.paraConLogo}
        paraConHead={tempObj.paraConHead}
        paraConSubBottom={tempObj.paraConSubBottom}
        paraConCopy={tempObj.paraConCopy}
      />
    )
  }

  render(){
    return(
      <div>
        <WebFonts />
        <div id="intro" 
          style={{
            fontFamily: config.fontFamilyHead ? config.fontFamilyHead : '"Helvetica Neue", Helvetica, Arial, sans-serif'
          }}
        >
          <div id="intro-content">
            <div id="intro-bookmark">
            </div>
          </div>
          <div id="skip-link">
            <a 
              onClick={(e) => this.props.intro_end(e)}
              href="#" 
              className="skipLink"
            >
              Skip Intro
            </a>
          </div>
        </div>
        {this.renderParallaxSlide(0)}
        {this.renderParallaxSlide(1)}
        {this.renderParallaxSlide(2)}


      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    scrollTop:state.scrollTop,
    scrollBottom:state.scrollBottom,
    slidePos:state.slidePos
  }
}

export default connect(mapStateToProps,{scroll_change,intro_end})(App);
