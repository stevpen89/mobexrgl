import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './reset.css';
import ReactGridLayout from 'react-grid-layout'
import AppStore from './stores/AppStore'
import App1 from './App1'
import Comp1 from './components/comp1/Comp1'
import Comp2 from './components/comp2/Comp2'
import Comp3 from './components/comp3/Comp3'
import Comp4 from './components/comp4/Comp4'
import Comp5 from './components/comp5/Comp5'
import {observer} from "mobx-react"
import '../node_modules/react-grid-layout/css/styles.css'

class App extends Component {
  constructor(props) {
    super(props)
  
  }

  increment(){
    AppStore.addOne()
  }

  decrement(){
    AppStore.minusOne()
  }
  
  render() {
    var layout = [
      {i: 'a', x: 0, y: 0, w: 5, h: 4},
      {i: 'b', x: 3, y: 0, w: 3, h: 4},
      {i: 'c', x: 0, y: 5, w: 3, h: 4},
      {i: 'd', x: 3, y: 5, w: 3, h: 4},
      {i: 'e', x: 3, y: 5, w: 6, h: 8}
    ];
    console.log(layout)
    return (
      <div className="App">     
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <App1/>
        <div>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
        <ReactGridLayout className="layout" layout={layout} cols={30} rowHeight={20} width={1200} height={300}>
          <div className="gridItem" key="a"><Comp1/></div>
          <div className="gridItem" key="b"><Comp2/></div>
          <div className="gridItem" key="c"><Comp3/></div>
          <div className="gridItem" key="d"><Comp4/></div>
          <div className="gridItem" key="e"><Comp5/></div>
        </ReactGridLayout>
      </div>
    );
  }
} 

export default observer(App);


