var React = require('react');
module.exports = React.createClass({
  render:function(){
    var style = {'display':this.props.showShare?'block':'none'};
    return(
      <div className="share-float" style={style} onClick={this.props.hideFloat}>
        <img src={baseUrl+"32.png"} />
      </div>
    )
  }
});
