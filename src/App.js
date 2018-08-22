import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './reset.css';
import ReactGridLayout from 'react-grid-layout'
import Comp1 from './components/comp1/Comp1'
import Comp2 from './components/comp2/Comp2'
import Comp3 from './components/comp3/Comp3'
import Comp4 from './components/comp4/Comp4'

class App extends Component {
  render() {
    var layout = [
      {i: 'a', x: 0, y: 0, w: 3, h: 4, static:false, isDraggable:false, isResizable:true},
      {i: 'b', x: 3, y: 0, w: 3, h: 4,},
      {i: 'c', x: 6, y: 0, w: 3, h: 4},
      {i: 'd', x: 9, y: 0, w: 3, h: 4},
      {i: 'e', x: 12, y: 0, w: 3, h: 4},
      {i: 'f', x: 15, y: 0, w: 3, h: 4},
      {i: 'g', x: 18, y: 0, w: 3, h: 4, autoSize:true}
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            There is a Div Below this Text that should allow for RGL Functionality
        </p>
        <ReactGridLayout className="layout" layout={layout} cols={30} rowHeight={20} width={1200} height={300}>
          <div className="gridItem" key="a">a</div>
          <div className="gridItem" key="b">b</div>
          <div className="gridItem" key="c">c</div>
          <div className="gridItem" key="d"><Comp1/></div>
          <div className="gridItem" key="e"><Comp2/></div>
          <div className="gridItem" key="f"><Comp3/></div>
          <div className="gridItem" key="g"><Comp4/></div>
        </ReactGridLayout>
      </div>
    );
  }
}

export default App;


