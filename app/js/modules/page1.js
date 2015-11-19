var React = require('react');
module.exports = React.createClass({
  nextPage:function(){
    this.refs.page1.className+=' pageHide';
    this.props.showNav();
  },
  render:function(){
    return(
      <section className="page1" ref="page1">
        <img src={baseUrl+"0.png"} alt="" className="a0"/>
        <img src={baseUrl+"1.png"} alt="" className="a1"/>
        <img src={baseUrl+"2.png"} alt="" className="a2"/>
        <img src={baseUrl+"3.png"} alt="" className="a3" onClick={this.nextPage}/>
      </section>
    )
  }
});