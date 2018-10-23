import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './reset.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactGridLayout from 'react-grid-layout'
import AppStore from './stores/AppStore'
import Comp1 from './components/comp1/Comp1'
import Comp2 from './components/comp2/Comp2'
import Comp3 from './components/comp3/Comp3'
import Comp4 from './components/comp4/Comp4'
import {observer} from "mobx-react"
// import '../node_modules/react-grid-layout/css/styles.css'
import { auto } from 'async';

class App extends Component {
 constructor(props) {
   super(props)
   this.state={
     width: 80,
   height: 3,
   compArr:[Comp1,Comp2,Comp3,Comp4]}
 }




 increment(){
   AppStore.addOne()
 }

 decrement(){
   AppStore.minusOne()
 }

 map(){
   let arr =[]
   var height = 8;
   var width = this.state.width;
   for(let q =0;q<11;q++){
     arr.push(
       <div className="gridItem" key={q.toString()} data-grid={{i: q.toString(),x: 0, y: 0, w: width, h: height,}}>we are clones</div>
     )
   }
   return arr;
 }
 render() {
   var layout = [
     {i: 'a', x: 0, y: 0, w: 4, h: 4},
     {i: 'b', x: 3, y: 0, w: 3, h: 4},
     {i: 'c', x: 0, y: 5, w: 3, h: 4},
     {i: 'd', x: 20, y: 20, w: 3, h: 4}
   ];
   return (
     <div className="App">
       <div className="carousel-wrapper">
         <Carousel 
          showIndicators={false}
          showStatus={false}
          showArrows={true}
          showThumbs={true}
          // thumbWidth={ -- you can set a pixel width here -- }
          infiniteLoop={true}
          // selectedItem={ -- you can select an item through props, which
          // will set the initial item on the carousel -- }
          // axis={ -- string 'vertical' or 'horizontal' -- }
          // verticalSwipe={ -- string 'standard' or 'natural' -- }
          // onChange={takes a function that will be fired when carousel changes}
          // onClickItem={takes a function that fires on item click}
          // onClickThumb={takes a function that fires on thumb click}
          width={'1200px'} // size control for the carousel
          useKeyboardArrows={true}
          autoPlay={true}
          stopOnHover={true}
          interval={2000}
          transitionTime={750}

          //additional probably not needed props: 
          //
          //swipeScrollTolerance	number	5	Allows scroll when the swipe movement occurs in a different direction than the carousel axis and within the tolerance - Increase for loose - Decrease for strict
          // swipeable	boolean	true	Enables swiping gestures
          // dynamicHeight	boolean	false	Adjusts the carousel height if required. -- Do not work with vertical axis --
          // emulateTouch	boolean	false	Allows mouse to simulate swipe
          // statusFormatter	func	(current, total) => ${current} of ${total}	Allows custom formatting of the status indicator
          // centerMode	boolean	false	Enables centered view with partial prev/next slides. Only works with horizontal axis.
          // centerSlidePercentage	number	80	optionally specify percentage width (as an integer) of the slides in centerMode

          >

           <div>
             <img className="carousel-item-image" src="https://images.unsplash.com/photo-1518670309426-6643a938d2a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a32351554e5ff852357a0cd716842375&auto=format&fit=crop&w=2550&q=80"/>
             <p className="carousel-item-label">Snowboarding 1</p>
           </div>
           <div>
             <img className="carousel-item-image" src="https://images.unsplash.com/photo-1518085050105-3c33befa5442?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=97056e45ab456a1be0f7a1634e2223a0&auto=format&fit=crop&w=2400&q=80"/>
             <p className="carousel-item-label">Snowboarding 2</p>
           </div>
           <div>
             <img className="carousel-item-image" src="https://images.unsplash.com/photo-1523246181290-a16e4b9a00b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89d67be335d2db081db0047ee0d3cafc&auto=format&fit=crop&w=2167&q=80"/>
             <p className="carousel-item-label">Snowboarding 3</p>
           </div>
           <div>
             <img className="carousel-item-image" src="https://images.unsplash.com/photo-1505873346750-69ce3daeb225?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=119c7782ec89bb0b2eee8fc38fc5b124&auto=format&fit=crop&w=2550&q=80"/>
             <p className="carousel-item-label">Snowboarding 4</p>
           </div>
           <div>
             <img className="carousel-item-image" src="https://images.unsplash.com/photo-1507534192483-69914c0692d7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ea983aebcf152239316ddbad0f4e7cf&auto=format&fit=crop&w=3734&q=80"/>
             <p className="carousel-item-label">Snowboarding 5</p>
           </div>
           <div>
             <img className="carousel-item-image" src="https://images.unsplash.com/photo-1521702463994-9fa24cae458e?ixlib=rb-0.3.5&s=2794f02594c6799d0b8d76ed59529a3d&auto=format&fit=crop&w=2550&q=80"/>
             <p className="carousel-item-label">Snowboarding 6</p>
           </div>
         </Carousel>
       </div>
       <div>
         <button onClick={this.increment}>+</button>
         <button onClick={this.decrement}>-</button>
       </div>
       <div style={{width: '100%', height: '100vh',  overflow: 'scroll'}}>
       <ReactGridLayout  className="layout" layout={layout} cols={30} rowHeight={20} width={800} height={300}>
         <div onChange={e=>console.log(e.target.value)} className="gridItem" key="a"><Comp1/></div>
         <div className="gridItem" key="b"><Comp2/></div>
         <div className="gridItem" key="c"><Comp3/></div>
         {this.map()}
       </ReactGridLayout>
       </div>
     </div>
   );
 }
}

export default observer(App);