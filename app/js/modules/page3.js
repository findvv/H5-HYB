var React = require('react');
let personList = null;
module.exports = React.createClass({
  hideNavi:function(){
    this.props.hideNavi();
  },
  componentWillReceiveProps:function(){
    let navNum = this.props.activePage;
    if (navNum == 6) {
      this.hideNavi();
    }
  },
  componentDidUpdate:function(){
    let actNav = this.props.activePage - 2;
    if (actNav>-1 && actNav<6) {
      for (let i=0;i<personList.length;i++) {
          personList[i].className = 'everyPerson';
      }
      personList[actNav].className += ' active';
    }
  },
  componentDidMount:function(){
    personList = document.getElementsByClassName('everyPerson');
    var ggs = document.getElementsByClassName('gg');
    for (let i=0;i<ggs.length;i++){
      ggs[i].addEventListener('transitionEnd', function(){ 
        canAnimate = true;
      }, false);
      ggs[i].addEventListener('webkitTransitionEnd', function(){ 
        canAnimate = true;
      }, false); 
    }
  },
  toComment:function(){
    if (canClick) {
      window.location.href="http://m.sohu.com/cm/556409993/";
    }
  },
  showShare:function(){
    if (canClick) {
      this.props.showShare();
    }
  },
  render:function(){   
    let newClass = this.props.showPage3?'page3':'page3 pageHide';
    return(
      <section className={newClass} ref="page3">
        <div className='everyPerson'>
          <img src={baseUrl+"12.jpg"} alt="" className="e1"/>
          <img src={baseUrl+"13.png"} alt="" className="e2"/>
          <img src={baseUrl+"14.png"} alt="" className="e3 gg"/>
        </div>
        <div className='everyPerson'>
          <img src={baseUrl+"15.jpg"} alt="" className="e1"/>
          <img src={baseUrl+"16.png"} alt="" className="e4"/>
          <img src={baseUrl+"17.png"} alt="" className="e3 gg"/>
        </div>
        <div className='everyPerson'>
          <img src={baseUrl+"18.jpg"} alt="" className="e1"/>
          <img src={baseUrl+"19.png"} alt="" className="e4"/>
          <img src={baseUrl+"20.png"} alt="" className="e3 gg"/>
        </div>
        <div className='everyPerson'>
          <img src={baseUrl+"21.jpg"} alt="" className="e1"/>
          <img src={baseUrl+"22.png"} alt="" className="e2"/>
          <img src={baseUrl+"23.png"} alt="" className="e3 gg"/>
        </div>
        <div className='everyPerson'>
          <img src={baseUrl+"24.jpg"} alt="" className="e1"/>
          <img src={baseUrl+"25.png"} alt="" className="e4"/>
          <img src={baseUrl+"26.png"} alt="" className="e3 gg"/>
        </div>
        <div className='everyPerson'>
          <img src={baseUrl+"27.jpg"} alt="" className="e5"/>
          <img src={baseUrl+"28.jpg"} alt="" className="e6"/>
          <img src={baseUrl+"29.jpg"} alt="" className="e7 gg"/>
          <div className="last">
            <img src={baseUrl+"30.png"} alt="" className="e8"/>
            <div className="e9 gg">
              <img src={baseUrl+"30.jpg"} alt="" className="f1" onClick={this.toComment}/>
              <img src={baseUrl+"31.jpg"} alt="" className="f2" onClick={this.showShare}/>
              <img src={baseUrl+"31.png"} alt="" className="f3"/>
              <p><span>策划/蓬勃 琳超</span><span>设计/阿连</span><span>制作/张兆翔</span></p>
            </div>
          </div>
        </div>
      </section>
    )
  }
});