var React = require('react');
module.exports = React.createClass({
  componentDidMount:function(){
    let that = this;
    that.refs.p1.addEventListener('webkitTransitionEnd', function(){
      that.refs.page2.className="page2 step1";
    }, false); 
    that.refs.p2.addEventListener('webkitTransitionEnd', function(){
      that.refs.page2.className="page2 step1 step2";
    }, false); 
    that.refs.p3.addEventListener('webkitTransitionEnd', function(){
      canAnimate = true;
      that.props.showArrowFun();
    }, false); 
    that.refs.p1.addEventListener('transitionEnd', function(){
      that.refs.page2.className="page2 step1";
    }, false); 
    that.refs.p2.addEventListener('transitionEnd', function(){
      that.refs.page2.className="page2 step1 step2";
    }, false); 
    that.refs.p3.addEventListener('transitionEnd', function(){ 
      canAnimate = true;
      that.props.showArrowFun();
    }, false); 
  },
  render:function(){
    let newClass = this.props.showPage2?'playPage2':'',
        newClass2 = this.props.showPage2?'page2':'page2 pageHide';
    return(
      <section className={newClass2} ref="page2">
        <div className={newClass} ref="playPage">
          <img src={baseUrl+"4.png"} alt="" className="b0 c1 d1"/>
          <img src={baseUrl+"0.jpg"} alt="" className="b1 c2 d1"/>
          <img src={baseUrl+"5.png"} alt="" className="b2 c3 d1"/>
          <img src={baseUrl+"2.jpg"} alt="" className="b1 c4 d1" ref="p1"/>
          <img src={baseUrl+"3.jpg"} alt="" className="b1 c5 d2"/>
          <img src={baseUrl+"6.png"} alt="" className="b3 c6 d2"/>
          <img src={baseUrl+"7.png"} alt="" className="b4 c7 d2"/>
          <img src={baseUrl+"4.jpg"} alt="" className="b1 c8 d2" ref="p2"/>
          <img src={baseUrl+"5.jpg"} alt="" className="b1 c9"/>
          <img src={baseUrl+"8.png"} alt="" className="b4 c10"/>
          <img src={baseUrl+"9.png"} alt="" className="b5 c11"/>
          <img src={baseUrl+"9.png"} alt="" className="b6 c12"/>
          <img src={baseUrl+"10.png"} alt="" className="b7 c13"/>
          <img src={baseUrl+"11.png"} alt="" className="b8 c14" ref="p3"/>
        </div>
      </section>
    )
  }
});