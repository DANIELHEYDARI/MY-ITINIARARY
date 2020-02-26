import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll:1
    };
    return (

<div>
      
        <div className="button_center">
          <a className="button " href="https.google.com">ENTER</a>
        </div>



      <div className="">
      
        <Slider className="" {...settings}>
          <div>
          <img  className="img-slider"  src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg' alt="poijs"></img>
          </div>
          <div>
          <img  className="img-slider"  src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg' alt="poijs"></img>
          </div>
          <div>
          <img className="img-slider" src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg' alt="poijs"></img>
          </div>
          <div>
            <img className="img-slider" src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg' alt="poijs"></img>  
          </div>
          <div>
            <img className="img-slider" src= 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg' alt="poijs"></img>
          </div>
          <div>
           <img className="img-slider" src= 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg' alt="poijs"></img>  
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}













