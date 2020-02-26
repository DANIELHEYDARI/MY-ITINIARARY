import React, { Component }  from 'react';
import '../App.css';
import BackgroundVideo from './BackgroundVideo';
import Menu from './Menu'; 
import SimpleSlider from './SimpleSlider'




 class Landing extends Component {
    
  
    render() {
      
  
      return (
  
        <div>
         
          <Menu></Menu>
          
          <BackgroundVideo></BackgroundVideo>  
          
          <SimpleSlider></SimpleSlider>
        </div>
      );
    }
  }
  
  export default Landing;
  
