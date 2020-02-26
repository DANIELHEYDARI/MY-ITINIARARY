import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Landing from './Component/Landing'

import Cities from './Component/Cities'
import Favorites from './Component/Favorites'
import Logout from './Component/Logout'
import './App.css';


class App extends React.PureComponent {
  
  render() {

    
    return (
      <BrowserRouter>
        <div>
        <Route exact path='/' component={Landing}/>
   
        <Route exact path='/cities' component={Cities}/>
        <Route exact path='/favorites' component={Favorites}/>
        <Route exact path='/logout' component={Logout}/>


        </div>

      </BrowserRouter>
    );
  }
}
export default App;


// <Route exact path='/' component={Landing}/>