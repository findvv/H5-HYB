var React = require('react'),
    Nav = require('./nav.js'),
    Page1 = require('./page1.js'),
    Page2 = require('./page2.js');
require('./quo.js');
module.exports = React.createClass({
  componentDidMount:function(){
    $$('.main').on('swipeUp',function() {
        console.log(0);
    });
    $$('.main').on('swipeDown',function() {
        console.log(1);
    });
  },
  getInitialState:function(){
    return{
      hideNav:true,
      nav:0,
      playPage2:false
    }
  },
  showNav:function(){
    this.setState({
      hideNav:false,
      nav:1,
      playPage2:true
    });
  },
  render:function(){
    return(
      <div className="main">
        <Nav hideNav={this.state.hideNav} nav={this.state.nav}></Nav>
        <Page1 showNav={this.showNav}></Page1>
        <Page2 playPage2={this.state.playPage2}></Page2>
      </div>
    )
  }
});