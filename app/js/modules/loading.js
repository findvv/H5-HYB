var React = require('react');
var Loader = require('./preload.js').resLoader;
var allImgs = [ 
'http://news.sohu.com/upload/zzxhyb2015/img/3.jpg',
'http://news.sohu.com/upload/zzxhyb2015/img/31.jpg',
'http://news.sohu.com/upload/zzxhyb2015/img/5.png',
'http://news.sohu.com/upload/zzxhyb2015/img/20.png',
'http://news.sohu.com/upload/zzxhyb2015/img/18.jpg',
'http://news.sohu.com/upload/zzxhyb2015/img/0.jpg',
'http://news.sohu.com/upload/zzxhyb2015/img/25.png',
'http://news.sohu.com/upload/zzxhyb2015/img/2.png',
'http://news.sohu.com/upload/zzxhyb2015/img/30.png',
'http://news.sohu.com/upload/zzxhyb2015/img/28.jpg',
'http://news.sohu.com/upload/zzxhyb2015/img/5.jpg',
'http://news.sohu.com/upload/zzxhyb2015/img/15.jpg',
'http://news.sohu.com/upload/zzxhyb2015/img/7.png',
'http://news.sohu.com/upload/zzxhyb2015/img/17.png',
'http://news.sohu.com/upload/zzxhyb2015/img/22.png',
'http://news.sohu.com/upload/zzxhyb2015/img/2.jpg',
'http://news.sohu.com/upload/zzxhyb2015/img/12.jpg',
'http://news.sohu.com/upload/zzxhyb2015/img/30.jpg',
'http://news.sohu.com/upload/zzxhyb2015/img/4.png',
'http://news.sohu.com/upload/zzxhyb2015/img/14.png',
'http://news.sohu.com/upload/zzxhyb2015/img/32.png',
'http://news.sohu.com/upload/zzxhyb2015/img/9.png',
'http://news.sohu.com/upload/zzxhyb2015/img/19.png',
'http://news.sohu.com/upload/zzxhyb2015/img/1.png',
'http://news.sohu.com/upload/zzxhyb2015/img/11.png',
'http://news.sohu.com/upload/zzxhyb2015/img/27.jpg',
'http://news.sohu.com/upload/zzxhyb2015/img/arrow.png',
'http://news.sohu.com/upload/zzxhyb2015/img/4.jpg',
'http://news.sohu.com/upload/zzxhyb2015/img/32.jpg',
'http://news.sohu.com/upload/zzxhyb2015/img/6.png',
'http://news.sohu.com/upload/zzxhyb2015/img/16.png',
'http://news.sohu.com/upload/zzxhyb2015/img/24.jpg',
'http://news.sohu.com/upload/zzxhyb2015/img/1.jpg',
'http://news.sohu.com/upload/zzxhyb2015/img/26.png',
'http://news.sohu.com/upload/zzxhyb2015/img/3.png',
'http://news.sohu.com/upload/zzxhyb2015/img/13.png',
'http://news.sohu.com/upload/zzxhyb2015/img/31.png',
'http://news.sohu.com/upload/zzxhyb2015/img/29.jpg',
'http://news.sohu.com/upload/zzxhyb2015/img/8.png',
'http://news.sohu.com/upload/zzxhyb2015/img/21.jpg',
'http://news.sohu.com/upload/zzxhyb2015/img/23.png',
'http://news.sohu.com/upload/zzxhyb2015/img/0.png',
'http://news.sohu.com/upload/zzxhyb2015/img/10.png'];
module.exports = React.createClass({
  getInitialState:function(){
    return{
      progress:'0%',
      show:true
    }
  },
  componentDidMount:function(){
    let that = this,
        loader = new Loader({
        resources: allImgs,
        onStart: function(total) {},
        onProgress: function(current, total) {
          var percent = parseInt(current / total * 100) + '%';
          that.setState({
            progress:percent
          });
        },
        onComplete: function(total) {
          that.setState({
            show:false
          });
        }
      });
    loader.start();
  },
  render:function(){
    let style = {display:this.state.show?'block':'none'};
    return(
      <div className="loading" style={style}>
        <div className="pace">
          <div className="pace-progress">
            {this.state.progress}
          </div>
        </div>
      </div>
    )
  }
});
