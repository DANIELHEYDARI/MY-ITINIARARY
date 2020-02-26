import React, { Component } from 'react';
import Menu from './Menu'; 


class Logout extends Component {
  render() {
    return (
     
        <div className="Logout">
            <p>Logout</p>
            <Menu></Menu>
        </div>
      
    );
  }
}

export default Logout;