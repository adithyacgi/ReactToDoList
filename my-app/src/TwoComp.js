import React, { Component } from 'react';
import logo from './logo.svg';

class TwoComp extends Component
{
    render()
    {
        return( 
            <p>ada</p>
        );
    }
}

class CompOne extends Component
{

 constructor(props) {
    super(props);
    this.state = {boxValue: ''};
  }

    changeHandler(event)
    {
        this.setState({boxValue: event.target.value});
    }

    render()
    {
        return(
            <div>
            <input type="text" name="toDoTask" onChange={this.changeHandler}/>
            </div>
        );
    }
}

class CompTwo extends Component
{
    render()
    {
        return(
            <p> Added {this.props.textValue}</p>
        );
    }
}

export default TwoComp;
