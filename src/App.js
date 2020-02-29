import React from 'react';
import './App.css';
import store from './store/index';
import {connect} from 'react-redux';
import {scroll_change} from './actions/index';
import {WebFonts} from './components/fonts';
import {config} from './constants/config'

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
  render(){
    return(
      <div>
        <WebFonts />
        <div style={{fontFamily: FontFamily()}}>
          <div 
            id="scrollCounter"
          >
            <h1>
              {this.props.scrollNumber}
            </h1>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    scrollNumber:state.scrollNumber
  }
}

export default connect(mapStateToProps,{scroll_change})(App);
