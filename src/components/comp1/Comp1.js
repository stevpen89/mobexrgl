import React, { Component } from 'react'
import {observe} from 'mobx'
import {observer} from 'mobx-react'
import AppStore from '../../stores/AppStore'

class Comp1 extends Component {
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
  changeHandler(val){
    AppStore.newText(val)
  }

  render() {
    return (
      <div>
        Component 1
        <br/>
        {AppStore.someNumber}
        <br/>
        <input onChange={(e)=>this.changeHandler(e.target.value)}/>
      </div>
    )
  }
}

export default observer(Comp1)