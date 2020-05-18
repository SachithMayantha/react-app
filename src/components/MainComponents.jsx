import React, { Component } from 'react';
import ItemBox from './itemBox/ItemBox';

class MainComponents extends Component {
    

    //method of component
    render() {
        return (
            <div style={{display:'flex'}}>
                <ItemBox title="Anchor" price="450.00" desc="New zealand Imported"/>
                <ItemBox/>
                <ItemBox/>
                <ItemBox/>
                <ItemBox/>
            </div>
        ); 
    }
}

export default MainComponents;