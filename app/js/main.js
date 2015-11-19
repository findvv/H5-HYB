var React = require('react'),
    ReactDom = require('react-dom'),
    // pageResponse = require('./modules/fullPage.js').pageResponse,
    Loading = require('./modules/loading.js'),
    ShareFloat = require('./modules/shareFloat.js'),
    Main = require('./modules/section.js');
// // 初始化页面
// pageResponse({
//   selector: '.all'
// });


var App = React.createClass({
  getInitialState:function(){
    return{
      showMain:false,
      showShare:false
    }
  },
  showShare:function(){
    this.setState({
      showShare:true
    });
  },
  hideShare:function(){
    this.setState({
      showShare:false
    });
  },
  render:function(){
    return(
      <div className="wrap">
        <Loading />
        <ShareFloat showShare={this.state.showShare} hideShare={this.hideShare}/>
        <Main showMain={this.state.showMain} showShare={this.showShare}/>
      </div>
    )
  }
});
ReactDom.render(<App />,document.getElementById('all'));