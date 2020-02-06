import React, { Component } from 'react';
class Step3 extends Component {
    render() {
        if (this.props.currentStep !== 3) {
            return null
            } 
            return(
            <div className="form-group">
                <label htmlFor="status">What condition is your body corrently in? (single word answer)</label>
                <input
                className="form-control"
                id="status"
                name="status"
                type="text"
                placeholder="Enter your current status"
                value={this.props.status}
                onChange={this.props.handleChange}
                />
                <br></br>
                <label htmlFor="matter">Favorite state of matter?</label>
                <input
                className="form-control"
                id="matter"
                name="matter"
                type="text"
                placeholder="Enter what matters"
                value={this.props.matter}
                onChange={this.props.handleChange}
                />
                <br></br>
                <label htmlFor="similar">A word your name kind of sounds like? (e.g Brian -> Brain)</label>
                <input
                className="form-control"
                id="similar"
                name="similar"
                type="text"
                placeholder="I'm sorry about that matter pun"
                value={this.props.similar}
                onChange={this.props.handleChange}
                />
                <br></br>
                <label htmlFor="zodiac">What is your Zodiac sign?</label>
                <input
                className="form-control"
                id="zodiac"
                name="zodiac"
                type="text"
                placeholder="Ted Cruz isn't a Zodiac sign, :("
                value={this.props.zodiac}
                onChange={this.props.handleChange}
                />
                <br></br>
                <label htmlFor="personality">If you had to define your personality in one word, what would it be?</label>
                <input
                className="form-control"
                id="personality"
                name="personality"
                type="text"
                placeholder="Enter your soul here!"
                value={this.props.personality}
                onChange={this.props.handleChange}
                />
                <br></br>
            </div>
            );
    }
  }
export default Step3