import React, { Component } from 'react'
import AppStore from '../../stores/AppStore'
import axios from 'axios'
require('dotenv').config();
const {app_id,app_key} = process.env; 

var Dictionary = require('oxford-dictionary');


var config = {
	app_id,
	app_key,
	source_lang:"en"
}

var dict = new Dictionary(config);



const apiFront = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/en/'

export default class Comp5 extends Component {
	constructor(){
		super()
		this.state={
			input:'',
			definition:''
		}
	}

	componentDidMount(){
		
	}

	changeHandler = (val) => {
		this.setState({input:val})	
	}

	lookup = () => dict.find(this.state.input).then((res)=>{console.log(res)})


	render() {
		return (
			<div>
				Component 5
				<input onChange={(e)=>this.changeHandler(e.target.value)}/>
				<button onClick={()=>this.lookup()}>Click for Definition</button>
				<h5>{this.state.definition}</h5>
			</div>
		)
	}
}
