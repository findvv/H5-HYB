var React = require('react');
module.exports = React.createClass({
  hideFloat:function(){
    this.props.hideShare();
  },
  render:function(){
    var style = {'display':this.props.showShare?'block':'none'};
    return(
      <div className="share-float" style={style}>
        <img src={baseUrl+"32.png"} onClick={this.hideFloat}/>
      </div>
    )
  }
});
