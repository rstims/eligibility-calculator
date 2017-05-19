import React, { Component } from 'react';
import logo from './HSA_logo_CMYK_tag.png';
import './App.css';

export default class AppView extends Component {

  constructor(props){
  	super(props);

  	this.nextSlide = this.nextSlide.bind(this);
  	this.prevSlide = this.prevSlide.bind(this);
  }

  componentDidMount(){
  	this.props.actions.initApp(this.props.isLoading);	
  }

  nextSlide(){
  	this.props.action.next(this.props.nextSlide);
  }

  prevSlide(){
  	this.props.action.prev(this.props.prevSlide);
  }
 
  render() {
  	console.log(this.props.isLoading);
    return (
      <div className="App">
        <div class="container">
        	<header>
        		<img src={logo} alt="HealthSavings Logo" />
        	</header>
        </div>
      </div>
    );
  }
}