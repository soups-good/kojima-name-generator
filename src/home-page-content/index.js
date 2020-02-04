import React, { Component } from 'react';
import ireland from './DSC01617.JPG';
import gamer from './gamer.gif'
import "./content.css"

class Content extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row">
                <div className="col-md-5">
                    <img src={ireland} alt="ireland" className="img-responsive" width="100%"/>
                    <p className="text-center">sometimes im photo</p>
                </div>
                <div className="col-md-7 text-center">
                    <p>sometimes im write</p>
                    <p className="poem">Bright lights and flashy colors</p><br></br>
                    <p className="poem">Warm breezes and love in the air</p><br></br>
                    <p className="poem">That’s how he imagined the world outside</p><br></br>
                    <p className="poem">Since he could no longer remember it</p><br></br>
                    <p className="poem">A soft buzz followed him wherever he went</p><br></br>
                    <p className="poem">The annoying reminder of who he is and what he can no longer be</p><br></br>
                </div>
                <div className="col-md-12 text-center">
                    <p>sometimes im code</p>
                    <p>look at this bad website</p>
                </div>
                <div className="col-md-12 text-center">
                    <p className="boldit">BUT most importantly</p>
                    <p className="boldit">im gamer</p>
                    <img src={gamer} height="150%" alt="sick gamer gif"/>
                </div>
            </div>
        );
    }
}
 
export default Content;