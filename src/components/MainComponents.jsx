import React, { Component } from 'react';

class MainComponents extends Component {
    
    //make state
    constructor(props){
        super(props);
        //this is a javascript object 
        this.state={
            //use json(key-value pairs) format
            firstname: 'Mayantha',
            lastname : 'Fernando'
        }
    }
    
    //method of component
    render() {
        return (
            <div>
                <h1>Hello {this.state.firstname} {this.state.lastname}.!</h1>
            </div>
        );
    }
}

export default MainComponents;