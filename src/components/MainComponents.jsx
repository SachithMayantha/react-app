import React, { Component } from 'react';
import ItemBox from './itemBox/ItemBox';

class MainComponents extends Component {
    
    //make state
    constructor(props){
        super(props);
        //this is a javascript object 
        this.state={
            //use json(key-value pairs) format
            name: 'Kamal',
            lastname : 'Fernando'
        }
    }
    changeName=()=>{
        //setState method use to change all states
        this.setState({
            lastname : 'Perera'
        })
        
    }

    //method of component
    render() {
        return (
            <div>
                <ItemBox/>
            </div>
        ); 
    }
}

export default MainComponents;