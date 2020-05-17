import React, { Component } from 'react'
import './ItemBoxStyle.css'

import Anchor from '../../images/products/anchor.png'

class ItemBox extends Component {
    render() {
        return ( 
            <div className="box" align="center">
                <h2>Title</h2>
                <img src={Anchor}/>
            </div>
        );
    }
}

export default ItemBox;