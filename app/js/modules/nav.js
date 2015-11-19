let React = require('react');
module.exports = React.createClass({
  render:function(){
    let showStyle = {'display':this.props.hideNav?"none":"block"},
        showNav = {'top':this.props.nav*104};
    return(
      <div className="nav" style={showStyle}>
        <img src={baseUrl+"1.jpg"} alt=""/>
        <ul>
          <li style={showNav}></li>
        </ul>
      </div>
    )
  }
});