import React, { Component } from 'react';
import Menu from './Menu'; 


class Favorites extends Component {
  render() {
    return (
     
        <div className="Favorites">
            <p>Favorites</p>
            <Menu></Menu>
        </div>
      
    );
  }
}

export default Favorites;