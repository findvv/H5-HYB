var React = require('react');
module.exports = React.createClass({
  componentDidMount:function(){
    var that = this;
    setTimeout(function(){
      that.refs.page2.className="page2 step1"
    },8500);
    setTimeout(function(){
      that.refs.page2.className="page2 step1 step2"
    },14000);
  },
  render:function(){
    var names = this.props.playPage2?'playPage2':'';
    return(
      <section className="page2" ref="page2">
        <div className={names}>
          <img src={baseUrl+"4.png"} alt="" className="b0 c1 d1"/>
          <img src={baseUrl+"0.jpg"} alt="" className="b1 c2 d1"/>
          <img src={baseUrl+"5.png"} alt="" className="b2 c3 d1"/>
          <img src={baseUrl+"2.jpg"} alt="" className="b1 c4 d1"/>
          <img src={baseUrl+"3.jpg"} alt="" className="b1 c5 d2"/>
          <img src={baseUrl+"6.png"} alt="" className="b3 c6 d2"/>
          <img src={baseUrl+"7.png"} alt="" className="b4 c7 d2"/>
          <img src={baseUrl+"4.jpg"} alt="" className="b1 c8 d2"/>
          <img src={baseUrl+"5.jpg"} alt="" className="b1 c9"/>
          <img src={baseUrl+"8.png"} alt="" className="b4 c10"/>
          <img src={baseUrl+"9.png"} alt="" className="b5 c11"/>
          <img src={baseUrl+"9.png"} alt="" className="b6 c12"/>
          <img src={baseUrl+"10.png"} alt="" className="b7 c13"/>
          <img src={baseUrl+"11.png"} alt="" className="b8 c14"/>
        </div>
      </section>
    )
  }
});