import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingList'
import TwoComp from './TwoComp'
import person from './Person'
import MultipleComponents from './MultipleComponents'




class App extends Component {
	render()
	 {
  	  return (
			<div>
				
			<MultipleComponents className="App-header" />
			</div>
    	);
	}
}


class OnlineShopping extends Component
{

	state=
	{
		Persons:['Adi', 'Srk'],
		Number:1
	}

	changeStateHandler=()=>{

		this.setState
		(
			{	
				Persons:['Adi','Srk','Manasa'],
				Number:this.state.Number+1
			}
		);
	}
	
	render()
	{
		return(

			<div>
				<button onClick={this.changeStateHandler}>Click me</button>
				<p>Here is the list {this.state.Persons.map((person)=><li>{person}</li>)}</p>
				<p>Number {this.state.Number}</p>
			</div>

		);
			
	}
}



export default App;
