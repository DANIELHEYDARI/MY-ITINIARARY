import React from 'react';
import mivideo from "../Fotos/TravelTheWorld1.mp4"
import '../App.css';
class BackgroundVideo extends React.PureComponent {


        render() {

                

                return (

                        <div>

                                <div>
                                        <h2 className="text-tinerary">MY tinerary</h2>
                                
                                </div>




                                <div className="video_css">
                                        
                                        <div className="video_container">
                                                <video id="background-video" loop autoPlay muted>
                                                        <source src={mivideo} type="video/mp4" />
                                                        Your browser does not support the video tag.

                                                </video>
                                        </div>

                                
                        
                                </div>
                        </div>
                )   



        }
}

export default BackgroundVideo;





/* <iframe width="560" height="315" src="https://www.youtube.com/embed/wpmwzUUMXbs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */

