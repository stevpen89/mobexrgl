import React, { Component } from 'react'
import {observe} from 'mobx'
import {observer} from 'mobx-react'
import AppStore from '../../stores/AppStore'

class Comp3 extends Component {
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
        Component 3
        <br/>
        {AppStore.someNumber*3}
      </div>
    )
  }
}

export default observer(Comp3)