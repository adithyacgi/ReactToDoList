import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingList'
import TwoComp from './TwoComp'
import person from './Person'
import Amazon from './AmazonShoppingList'
import Walmart from './WalmartShoppingList'
import MultipleComponents from './MultipleComponents'


const options=['Amazon', 'walmart']

const defaultOption = options[0]

function GetShop(props)
{
	if(props.selectedShop==='Amazon')
	{
		console.log('entered amazon');
		return <Amazon/>
	}
	else if(props.selectedShop==='Walmart')
	{
		return <Walmart/>
	}
	else if(props.selectedShop=='To-Do List')
	{
		return <MultipleComponents/>
	}
}

class App extends Component {
	

	constructor(props) {
		super(props);
		this.changeStateToSelected = this.changeStateToSelected.bind(this);
		let setlectedOption=this.state.selectedShop;

	  }

	state={selectedShop:'Amazon'}

	changeStateToSelected(event)
	{
		console.log(event.target.value)
		this.setState(
			{selectedShop:event.target.value}
		)
	}



	render()
	 {
		

  	  return (
			<div>
				<select  onChange={this.changeStateToSelected}  >
					<option>Amazon</option>
					<option>Walmart</option>
					<option>To-Do List</option>
				</select>

				<GetShop selectedShop={this.state.selectedShop}/>
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
