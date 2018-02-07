import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ShoppingList extends React.Component
{
	render(){	
	return(

		<div >
			<h4> Dynamic Data {this.props.dynamicData}</h4>
			<h3 className="shoppingList">Shopping List for {this.props.name} and size of basket is {this.props.numOfItems}</h3>
			<p className="App-header"> {this.props.items.map((item)=><li>{item}</li>)} </p>        
		</div>
	);	
	}
}

export default ShoppingList;