import React, { Component } from 'react';
class Step2 extends Component {
    render() {
        if (this.props.currentStep !== 2) {
            return null
            } 
            return(
            <div className="form-group">
                <label htmlFor="stabbed">What is the object you'd least like to be stabbed by?</label>
                <input
                className="form-control"
                id="stabbed"
                name="stabbed"
                type="text"
                placeholder="Enter the stabby object"
                value={this.props.stabbed}
                onChange={this.props.handleChange}
                />
                <br></br>
                <label htmlFor="talent">What is something you are good at? (Verb ending in -ing)</label>
                <input
                className="form-control"
                id="talent"
                name="talent"
                type="text"
                placeholder="Enter your verbed talent"
                value={this.props.talent}
                onChange={this.props.handleChange}
                />
                <br></br>
                <label htmlFor="carrots">How many carrots do you believe you could eat in one sitting, if someone, like, forced you to eat as many carrots as possible?</label>
                <input
                className="form-control"
                id="carrots"
                name="carrots"
                type="text"
                placeholder="HOW MANY CARROTS"
                value={this.props.carrots}
                onChange={this.props.handleChange}
                />
                <br></br>
                <label htmlFor="intangible">What is your greatest intangible fear? (e.g. death, loneliness, fear itself)</label>
                <input
                className="form-control"
                id="intangible"
                name="intangible"
                type="text"
                placeholder="Enter your intangible fear"
                value={this.props.intangible}
                onChange={this.props.handleChange}
                />
                <br></br>
                <label htmlFor="horses">What is your greatest tangible fear? (e.g. horses)</label>
                <input
                className="form-control"
                id="horses"
                name="horses"
                type="text"
                placeholder="Enter your tangible fear"
                value={this.props.horses}
                onChange={this.props.handleChange}
                />
                <br></br>
                <label htmlFor="last">What is the last thing you did before starting this form?</label>
                <input
                className="form-control"
                id="last"
                name="last"
                type="text"
                placeholder="Enter what you're putting off doing to fill out this form"
                value={this.props.last}
                onChange={this.props.handleChange}
                />
                <br></br>
            </div>
            );
    }
  }
export default Step2