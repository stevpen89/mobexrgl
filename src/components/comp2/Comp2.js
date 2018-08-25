import React, { Component } from 'react'
import {observe} from 'mobx'
import {observer} from 'mobx-react'
import AppStore from '../../stores/AppStore'

class Comp2 extends Component {
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
        Component 2
        <br/>
        {AppStore.someNumber*2}
      </div>
    )
  }
}

export default observer(Comp2)