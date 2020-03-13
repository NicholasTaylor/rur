import React from 'react';
import './App.css';
import store from './store/index';
import {connect} from 'react-redux';
import {scroll_change} from './actions/index';
import {WebFonts} from './components/fonts';
import {siteContent} from './constants/content';
import {config} from './constants/config';
import ParallaxSlide from './components/ParallaxSlide';

function FontFamily(){
  if(config.fontFamily){
    return(
      config.fontFamily
    )
  }
  else{
    return(
      '"Helvetica Neue", Helvetica, Arial, sans-serif'
    )
  }
}

class App extends React.Component {
  componentDidMount(){
    this.props.scroll_change();
    window.addEventListener('scroll',this.props.scroll_change);
    window.addEventListener('resize',this.props.scroll_change);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.scroll_change);
    window.removeEventListener('resize',this.props.scroll_change);
  }

  renderParallaxSlide(i){
    const arr = Object.assign({},siteContent);
    const tempObj = arr[i];
    return(
      <ParallaxSlide
        slideName={tempObj.slideName}
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
        <div style={{fontFamily: FontFamily()}}>
          <div id="slide">
            <div 
              id="slide-01"
              className="content"
            >
              <img 
                src='/images/logo-rur-white.png' 
                className="logo"
              />
            </div>
            <div
              className="content hidden"
            >
              <h1>
                Rossum's Universal Robots
              </h1>
            </div>
          </div>
          <div 
            id="scrollCounter"
          >
            <h1>
              ScrollTop: {this.props.scrollTop}<br/>
              ScrollBottom: {this.props.scrollBottom}
            </h1>
          </div>
        </div>
        {this.renderParallaxSlide(0)}
        {this.renderParallaxSlide(1)}


      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    scrollTop:state.scrollTop,
    scrollBottom:state.scrollBottom
  }
}

export default connect(mapStateToProps,{scroll_change})(App);
