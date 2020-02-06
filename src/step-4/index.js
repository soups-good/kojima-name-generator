import React, { Component } from 'react';
class Step4 extends Component {
    render(){
        if (this.props.currentStep !== 4) {
            return null
          } 
          return(
            <React.Fragment>
            <div className="form-group">
              <label htmlFor="kurt">Who is your favorite film character? (NOTE: must be played by Kurt Russell)</label>
              <input
                className="form-control"
                id="kurt"
                name="kurt"
                type="text"
                placeholder="Enter your favorite Kurt Russell"
                value={this.props.kurt}
                onChange={this.props.handleChange}
                /> 
              <br></br>
              <label htmlFor="kubrick">What is the last word of the title of your favorite Kubrick film?</label>
              <input
                className="form-control"
                id="kubrick"
                name="kubrick"
                type="text"
                placeholder="It's Odyssey, isn't it"
                value={this.props.kubrick}
                onChange={this.props.handleChange}
                /> 
              <br></br>  
              <label htmlFor="joy">What is the first word in the title of your favorite Joy Division album?</label>
              <input
                className="form-control"
                id="joy"
                name="joy"
                type="text"
                placeholder="Enter your Joy Division title"
                value={this.props.joy}
                onChange={this.props.handleChange}
                /> 
              <br></br> 
              <label htmlFor="NPR">What is a scientific term you picked up from listening to NPR once?</label>
              <input
                className="form-control"
                id="NPR"
                name="NPR"
                type="text"
                placeholder="Enter your favorite science"
                value={this.props.NPR}
                onChange={this.props.handleChange}
                /> 
              <br></br>
              <label htmlFor="war">What is a piece of military hardware you think looks cool even though war is bad?</label>
              <input
                className="form-control"
                id="war"
                name="war"
                type="text"
                placeholder="Enter your war machine here"
                value={this.props.war}
                onChange={this.props.handleChange}
                /> 
              <br></br>  
              <label htmlFor="mads">What is something you'd enjoy watching Mads Mikkelsen do?</label>
              <textarea
                className="form-control"
                id="mads"
                name="mads"
                type="text"
                placeholder="By golly I could probably watch him do anything!"
                rows="15" 
                /> 
              <br></br>  
              <label htmlFor="condensedMads">Please condense into one word.</label>
              <input
                className="form-control"
                id="condensedMads"
                name="condensedMads"
                type="text"
                placeholder="Just one!"
                value={this.props.condensedMads}
                onChange={this.props.handleChange}
                /> 
              <br></br>    
            </div>
            <button className="btn btn-success btn-block">Calculate Kojima Name</button>
            </React.Fragment>
          );
    }
  }
export default Step4