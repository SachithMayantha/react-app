import React, { Component } from 'react'
import './ItemBoxStyle.css'

class ItemBox extends Component {
    render() {
        return ( 
            <div className="box" align="center">
                <h2>{this.props.title}</h2>
                <img src={this.props.img} alt={"Milk"}/>
                <h3 style={{color:'black',fontStyle:'bold'}}>{`Rs.${this.props.price}`}</h3>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}

export default ItemBox;