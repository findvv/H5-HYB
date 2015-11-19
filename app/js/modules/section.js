var React = require('react'),
    Nav = require('./nav.js'),
    Page1 = require('./page1.js'),
    Page2 = require('./page2.js'),
    Page3 = require('./page3.js');
    require('./quo.js');
module.exports = React.createClass({
  getInitialState:function(){
    return{
      hideNav:true,
      nav:0,
      showPage1:true,
      showPage2:false,
      showPage3:false,
      showArrow:false
    }
  },
  showNav:function(){
    let nav = this.state.nav;
    canAnimate = false;
    this.setState({
      hideNav:false,
      showPage1:false,
      showPage2:true,
      nav:1
    });
    this.refs.music1.play();
  },
  hideNavi:function(){
    this.setState({
      hideNav:true,
      showArrow:false
    });
  },
  showArrowFun:function(){
    this.setState({
      showArrow:true
    });
  },
  playMusic:function(num){
    var that = this;
    switch(num){
      case 2:
        that.refs.music1.pause();
        that.refs.music1.currentTime = 0;
        that.refs.music3.pause();
        that.refs.music3.currentTime = 0;
        that.refs.music2.play();
        break;
      case 3:
        that.refs.music2.pause();
        that.refs.music2.currentTime = 0;
        that.refs.music1.pause();
        that.refs.music1.currentTime = 0;
        that.refs.music3.play();
        break;
      case 4:
        that.refs.music3.pause();
        that.refs.music3.currentTime = 0;
        that.refs.music4.pause();
        that.refs.music4.currentTime = 0;
        that.refs.music1.play();
        break;
      case 5:
        that.refs.music1.pause();
        that.refs.music1.currentTime = 0;
        that.refs.music4.play();
        break;
      case 6:
        that.refs.music4.pause();
        that.refs.music4.currentTime = 0;
        that.refs.music1.play();
        break;
    }
  },
  componentDidMount:function(){
    var that = this;
    $$('body').on('swipeUp',function() {
      if (canAnimate) {
        canAnimate = false;
        let nav = that.state.nav;
        if (nav!=0) {
          nav+=1;
        }
        if (nav>7) {
          nav = 7;
        }
        if (nav == 2) {
          that.setState({
            showPage2:false,
            showPage3:true
          });
        }
        that.setState({
          nav:nav
        });
        that.playMusic(nav);
      }
    });
    $$('body').on('swipeDown',function() {
      if (canAnimate) {
        canAnimate = false;
        let nav = that.state.nav;
        nav-=1;
        if (nav<0) {
          nav = 0;
        }
        that.setState({
          nav:nav
        });
        if (nav==0) {
          that.setState({
            showPage1:true,
            showPage2:false,
            hideNav:true,
            showArrow:false  
          });
        }
        if (nav==1) {
          that.setState({
            showPage2:true,
            showPage3:false
          });
        }
        that.playMusic(nav);
      }
    });
  },

  render:function(){
    var isHide = {'display':this.state.showArrow?'block':'none'}
    return(
      <div className="main">
        <Nav hideNav={this.state.hideNav} nav={this.state.nav}></Nav>
        <Page1 showNav={this.showNav} showPage1={this.state.showPage1}/>
        <Page2 showPage2={this.state.showPage2} showArrowFun={this.showArrowFun}/>
        <Page3 activePage={this.state.nav} hideNavi={this.hideNavi} showPage3={this.state.showPage3} showShare={this.props.showShare}/>
        <img src={baseUrl+"arrow.png"} alt="" className="b9" style={isHide} />
        <audio src={baseUrl+"1.mp3"} loop="loop" ref="music1"/>
        <audio src={baseUrl+"2.mp3"} loop="loop" ref="music2"/>
        <audio src={baseUrl+"3.mp3"} loop="loop" ref="music3"/>
        <audio src={baseUrl+"4.mp3"} loop="loop" ref="music4"/>
      </div>
    )
  }
});