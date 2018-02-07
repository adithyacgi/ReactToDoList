import React, { Component } from 'react';
import logo from './logo.svg';
import './MultipleComponents.css';


class MultipleComponents extends Component
{
    render()
    {
        return( 
           <CompOne />
        );
    }
}

class CompOne extends Component
{

 constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.clickAddHandler = this.clickAddHandler.bind(this);


  }
  state = {todo: [] ,values:[]};

    changeHandler(event)
    {
        this.setState({values: [event.target.value]});

    }

    clickAddHandler() {
        this.setState({todo: [...this.state.todo,this.state.values], values:[]});
      }
    
    render()
    {
        return(
            <div>
                 <h1 className="App-title"> TO-DO List</h1>
            <div className="App-header">
           
            <input type="text" className="textBox" size="50" onChange={this.changeHandler} />
            <button className="button" onClick={this.clickAddHandler} >Add Task</button>
            
            <CompTwo textValue={this.state.todo}/>
            </div>
            </div>
        );
    }
}

class CompTwo extends Component
{
    render()
    {
        return(
            <p className="list" >  
                 {this.props.textValue.map((todo=><li>{todo}</li>))}
            
            </p>
        );
    }
}

export default MultipleComponents;
