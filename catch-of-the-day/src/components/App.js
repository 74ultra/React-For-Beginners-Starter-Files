import React from 'react';
import Header from './Header.js';
import Order from './Order.js';
import Inventory from './Inventory.js';

class App extends React.Component {
    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header />
                </div>
                <Inventory />
                <Order />
            </div>
        );
    }

}

export default App;