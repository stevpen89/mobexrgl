import React, { Component } from 'react'
import {observe} from 'mobx'
import {observer} from 'mobx-react'
import AppStore from '../../stores/AppStore'

class Comp4 extends Component {
  constructor(props) {
    super(props)
    this.watcher = observe(AppStore,'someNumber',(change)=>{})
  }
  
  componentWillUnmount(){
    this.watcher();
  }

  componentWillReact(){
    console.log("Hey I Updated!!!")
  }

  render() {
    return (
      <div>
        Component 4
        <br/>
        {AppStore.someNumber*4}
        <br/>
        {AppStore.myText}
      </div>
    )
  }
}

export default observer(Comp4)