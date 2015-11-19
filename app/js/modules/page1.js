var React = require('react');
module.exports = React.createClass({
  nextPage:function(){
    this.props.showNav();
  },
  render:function(){
    var newClass = this.props.showPage1?'page1':'page1 pageHide';
    var newStyle = {'display':this.props.showPage1?'block':'none'};
    return(
      <section className={newClass} ref="page1" style={newStyle}>
        <img src={baseUrl+"0.png"} alt="" className="a0"/>
        <img src={baseUrl+"1.png"} alt="" className="a1"/>
        <img src={baseUrl+"2.png"} alt="" className="a2"/>
        <img src={baseUrl+"3.png"} alt="" className="a3" onClick={this.nextPage}/>
      </section>
    )
  }
});