import React, { Component } from 'react';
class Step1 extends Component {
    render() {
      if (this.props.currentStep !== 1) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div className="form-group">
          <label htmlFor="fullname">What is your full name?</label>
          <input
            className="form-control"
            id="fullname"
            name="fullname"
            type="text"
            placeholder="Enter your full name"
            value={this.props.fullname} // Prop: The full name input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
          <br></br>
          <label htmlFor="occupation">What do you do at your occupation?</label>
          <input
            className="form-control"
            id="occupation"
            name="occupation"
            type="text"
            placeholder="Enter your occupation"
            value={this.props.occupation} // Prop: The full name input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
          <br></br>
          <label htmlFor="condensedOccupation">Condense the verb in your answer into a single -er noun. (e.g. if you are a sheep farmer, your answer will be "farmer")</label>
          <input
            className="form-control"
            id="condensedOccupation"
            name="condensedOccupation"
            type="text"
            placeholder="Enter your condensed occupation"
            value={this.props.condensedOccupation} // Prop: The full name input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
          <br></br>
          <label htmlFor="pet">What was your first pet's specific species/breed? If you have never had a pet, please answer with an animal you wish you owned.</label>
          <input
            className="form-control"
            id="pet"
            name="pet"
            type="text"
            placeholder="Enter your first pet"
            value={this.props.pet} // Prop: The full name input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
          <br></br>
          <label htmlFor="embarassingMem">What's your most embarassing childhood memory? Be specific.</label>
          <textarea
            className="form-control"
            id="embarassingMem"
            name="embarassingMem"
            type="text"
            placeholder="Enter your embarassing memory"
          />
          <br></br>
          <label htmlFor="embarassingCondensedMem">Condense this story into two words</label>
          <input
            className="form-control"
            id="embarassingCondensedMem"
            name="embarassingCondensedMem"
            type="text"
            placeholder="Enter your shorter embarassing memory"
            value={this.props.embarassingCondensedMem} // Prop: The full name input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
          <br></br>
        </div>
      )
    }
  }
export default Step1