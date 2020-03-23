import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {scroll_change} from './actions/index';
import {WebFonts} from './components/fonts';
import {siteContent} from './constants/content';
import {config} from './constants/config';
import ParallaxSlide from './components/ParallaxSlide';

class App extends React.Component {

  componentDidMount(){
    this.props.scroll_change();
    window.addEventListener('scroll',(e)=>this.props.scroll_change(e))
    window.addEventListener('resize',(e)=>this.props.scroll_change(e))
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',(e)=>this.props.scroll_change(e))
    window.removeEventListener('resize',(e)=>this.props.scroll_change(e))
  }

  renderParallaxSlide(i){
    const arr = Object.assign({},siteContent);
    const tempObj = arr[i];
    return(
      <ParallaxSlide
        slideName={tempObj.slideName}
        bgType={tempObj.bgType}
        copyVertical={tempObj.copyVertical}
        copyHorizontal={tempObj.copyHorizontal}
        copyCaption={tempObj.copyCaption}
        colorMode={tempObj.colorMode}
        paraStrength={tempObj.paraStrength}
        paraBgSrc={tempObj.paraBgSrc}
        paraBgAlt={tempObj.paraBgAlt}
        paraConLogo={tempObj.paraConLogo}
        paraConHead={tempObj.paraConHead}
        paraConCopy={tempObj.paraConCopy}
      />
    )
  }

  render(){
    return(
      <div>
        <WebFonts />
        <nav 
          id="nav-top"
          style={{
            animationName:this.props.navStatus,
            fontFamily: config.fontFamilyBody ? config.fontFamilyBody : '"Helvetica Neue", Helvetica, Arial, sans-serif'
          }}
        >
          <div 
            id="nav-title"
          >
            Rossum's Universal Robots
          </div>
          <div 
            id="nav-cta"
          >
            <a 
              href="https://www.eventbrite.com/"
            >
              Order Tickets
            </a>
          </div>
        </nav>
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
    slidePos:state.slidePos,
    navStatus:state.navStatus
  }
}

export default connect(mapStateToProps,{scroll_change})(App);
