import React, { Component } from 'react';
import "./form.css";
import Step1 from '../step-1'
import Step2 from '../step-2'
import Step3 from '../step-3'
import Step4 from '../step-4'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
          currentStep: 1,
          fullname: '',
          occupation: '',
          condensedOccupation: '',
          pet: '',
          embarassingCondensedMem: '',
          stabbed: '',
          talent: '',
          carrots: '',
          intangible: '',
          horses: '',
          last: '',
          status: '',
          matter: '',
          similar: '',
          zodiac: '',
          personality: '',
          kurt: '', 
          kubrick: '',
          joy: '',
          NPR: '',
          war: '',
          condensedMads: '',
          kojimaName: '',
          cloneCondition: '',
          lickable: '',
          nameCat: '',
          nameCatDesc: '',
          submitted: false
        }
      }
    
      handleChange = event => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })    
      }

      roll = diceType => {
          return Math.floor(Math.random()*diceType + 1);
      }

      calculateName = () => {
        var kojimaName = "";
        const { fullname, condensedOccupation, pet, embarassingCondensedMem, 
            stabbed, talent, intangible, horses, last,
            status, matter, similar, zodiac, personality, 
            kurt, kubrick, joy, NPR, war, condensedMads } = this.state
        var numNames = this.roll(6);
        var multiNameCondition = true;
        if(numNames < 6){
            numNames = 1;
            multiNameCondition = false;
        }
        var kojimaNames = []; 
        for(var i = 0; i < numNames; i++){
            kojimaNames[i] = "";
            // The -man condition
            var manCondition = false;
            var cloneCondition = false;
            var lickable = false;
            var nameCondition = false;
            var nameCat = "";
            var nameCatDesc = "";
            if(this.roll(4) === 4){
                // come back at the end to append this
                manCondition = true;
            }
            // The condition condition
            var conditionRoll = this.roll(8);
            if(conditionRoll === 6){
                kojimaNames[i] = " Big" + kojimaNames[i];
            }
            else if(conditionRoll === 7){
                kojimaNames[i] = " Old" + kojimaNames[i];
            }
            else if(conditionRoll === 8){
                kojimaNames[i] = " " + status + kojimaNames[i];
            }
            //The Clone Condition
            if(this.roll(12) === 12){
                cloneCondition = true;
            }
            //The Kojima Condition
            if(this.roll(100) === 69){
                kojimaNames[i] = "Hideo Kojima"
                nameCat = "Oh no. You are Hideo Kojima. Hideo Kojima created you and is also you. You are the man who created himself and there is nothing you can do about it. You're in Kojima's world - your world - and that's just the breaks, pal. Stop this right now. You're Hideo Kojima. Go do the things that Hideo Kojima does."
            }
            else{
              //Determine name category
              var nameCatRoll = this.roll(20);
              if(nameCatRoll === 1){
                  nameCat = "NORMAL NAME";
                  nameCatDesc = "Kojima's early work includes lots of characters that have names that are widely considered to be \"normal.\" Was this just because, in the early years, he didn't have the power to say, \"I'm Hideo Kojima, I can name someone Die-Hardman if I want to\" without people qustioning him? Probably.";
                  kojimaNames[i] += " " + fullname;
              }
              else if(nameCatRoll >= 2 && nameCatRoll <= 6){
                  nameCat = "OCCUPATIONAL NAME";
                  nameCatDesc = "Kojima's characters tend to be driven by the work that they do. That often carries over to their names. You, too, can be nothing more than your job.";
                  var occupationalRoll = this.roll(4);
                  if(occupationalRoll === 1){
                      // 15
                      kojimaNames[i] += " " + personality;
                  }
                  else if(occupationalRoll === 2){
                      // 6
                      kojimaNames[i] += " " + talent;
                  }
                  else if(occupationalRoll === 3){
                      // 13
                      kojimaNames[i] += " " + similar;
                  }
                  else{
                      // 16
                      kojimaNames[i] += " " + kurt;
                  }
                  // 2a
                  kojimaNames[i] += " " + condensedOccupation;
              }
              else if(nameCatRoll >= 7 && nameCatRoll <= 10){
                  nameCat = "HORNY NAME";
                  nameCatDesc = " Kojima's characters and stories are irrevocably horny. Weirdly horny, sure, but horny nonetheless.";
                  lickable = true;
                  var hornyRoll = this.roll(4);
                  if(hornyRoll === 1){
                      // 12
                      kojimaNames[i] += " " + matter;
                  }
                  else if(hornyRoll === 2){
                      kojimaNames[i] += " Naked";
                  }
                  else if(hornyRoll === 3){
                      // 6
                      kojimaNames[i] += " " + talent;
                  }
                  else{
                      // 14
                      kojimaNames[i] += " " + zodiac;
                  }
                  // 3
                  kojimaNames[i] += " " + pet;
              }
              else if(nameCatRoll >= 11 && nameCatRoll <= 13){
                  nameCat = "THE NAME";
                  nameCatDesc = "Kojima loves to make people have names that start with the word \"The\" and they usually symbolize fears or unstoppable forces. You are now that unstoppable force.";
                  nameCondition = true;
                  var nameRoll = this.roll(4);
                  if(nameRoll === 1){
                      // 8
                      kojimaNames[i] += " " + intangible;
                  }
                  else if(nameRoll === 2){
                      // 9
                      kojimaNames[i] += " " + horses;
                  }
                  else if(nameRoll === 3){
                      // 4a
                      kojimaNames[i] += " " + embarassingCondensedMem;
                  }
                  else{
                      // 20
                      kojimaNames[i] += " " + war;
                  }
              }
              else if(nameCatRoll >= 14 && nameCatRoll <= 17){
                  nameCat = "COOL NAME";
                  nameCatDesc = "Kojima loves to be cool. Sometimes, his idea of cool is a bit strange, but it is always cool to Hideo Kojima, and that's what matters.";
                  kojimaNames[i] += " " + condensedMads;
                  var coolRoll = this.roll(6);
                  if(coolRoll === 1){
                      // 17
                      kojimaNames[i] += " " + kubrick;
                  }
                  else if(coolRoll === 2){
                      // 18
                      kojimaNames[i] += " " + joy;
                  }
                  else if(coolRoll === 3){
                      // 19
                      kojimaNames[i] += " " + NPR;
                  }
                  else if(coolRoll === 4){
                      // 6
                      kojimaNames[i] += " " + talent;
                  }
                  else if(coolRoll === 5){
                      // 8
                      kojimaNames[i] += " " + intangible;
                  }
                  else{
                      // 13
                      kojimaNames[i] += " " + similar;
                  }
              }
              else if(nameCatRoll >= 18 && nameCatRoll <= 19){
                  nameCat = "VIOLENT NAME";
                  nameCatDesc = "Sometimes, a Kojima name can be very threatening and violent, like Sniper Wolf, or The Fury. Now you can also be threatening and violent."
                  var violentRoll = this.roll(4);
                  if(violentRoll === 1){
                      // 19
                      kojimaNames[i] += " " + NPR;
                  }
                  else if(violentRoll === 2){
                      // 12
                      kojimaNames[i] += " " + matter;
                  }
                  else if(violentRoll === 3){
                      // 20
                      kojimaNames[i] += " " + war;
                  }
                  else{
                      // 9
                      kojimaNames[i] += " " + horses;
                  }
                  // 5
                  kojimaNames[i] += " " + stabbed;
              }
              else if(nameCatRoll === 20){
                  nameCat = "NAME THAT LACKS SUBTEXT";
                  nameCatDesc = "Sometimes, Kojima gives up and just names a character exactly what they are. Congratulations. You are exactly what you do."
                  // 10
                  kojimaNames[i] += " " + last;
              }
              if(manCondition){
                  kojimaNames[i] += "-man";
              }
              if(nameCondition){
                  kojimaNames[i] = " The" + kojimaNames[i];
              }
            }
            kojimaNames[i] = kojimaNames[i] + " ";
        }
        // return cloneCondition, lickable, nameCat, kojimaNames[i];
        if(multiNameCondition === true){
            nameCat = "yeah that's all your name";
            nameCatDesc = "You have a lot of names now because sometimes, Kojima likes to get a little bit convoluted. And that's OK! The first name there is your true name, and the rest are all just your alternate names. But don't tell Kojima that; they're all important to him.";
        }
        this.setState({cloneCondition: cloneCondition});
        this.setState({lickable: lickable});
        this.setState({nameCat: nameCat}); 
        this.setState({nameCatDesc: nameCatDesc});  
        for(var j = 0; j < kojimaNames.length; j++){
          kojimaName += kojimaNames[j] + "\n";
        }      
        this.setState({kojimaName: kojimaName});
      }
       
      handleSubmit = event => {
        event.preventDefault()
        this.setState({ submitted: true })
        this.calculateName();
      }
      
      renderCloneCondition(){
        if(this.state.cloneCondition === true){
            return <React.Fragment>
            <div className="container">
              <h3 className = "row d-flex justify-content-center kojima">You rolled the clone condition, so go trade half your name with someone else's</h3>
            </div>
            </React.Fragment>  
        }
      }

      renderTongue(){
        if(this.state.lickable === true){
            return <React.Fragment>
            <div className="container">
              <h3 className = "row d-flex justify-content-center kojima">If you feel like it, your middle name can be "Lickable." I won't stop you.</h3>
            </div>
            </React.Fragment>  
        }
      }

      renderKojimaName() {
        return <React.Fragment>
          <div className="container">
            <h2 className = "row d-flex justify-content-center kojima">Your Kojima name is:</h2>
            {this.state.kojimaName.split("\n").map((i,key) => {
            return <h1 className = "row d-flex justify-content-center kojima" key={key}>{i}</h1>})}
            <h3 className = "row d-flex justify-content-center kojima">{this.state.nameCat}</h3>
            <h3 className = "row d-flex justify-content-center kojima">{this.state.nameCatDesc}</h3>
            <h3 className = "row d-flex justify-content-center kojima">Now go make an elaborate back story to go along with your new name!</h3>
          </div>
            </React.Fragment>  
      }
      
      _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 3? 4: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
        var elmnt = document.getElementById("kojima");
        elmnt.scrollIntoView(); 
      }
        
      _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
          currentStep: currentStep
        })
        var elmnt = document.getElementById("kojima");
        elmnt.scrollIntoView(); 
      }
    
    /*
    * the functions for our button
    */
    previousButton() {
      let currentStep = this.state.currentStep;
      if(currentStep !==1){
        return (
          <button 
            className="btn btn-secondary float-right" 
            type="button" onClick={this._prev}>
          Previous
          </button>
        )
      }
      return null;
    }
    
    nextButton(){
      let currentStep = this.state.currentStep;
      if(currentStep <4){
        return (
          <button 
            className="btn btn-primary float-right" 
            type="button" onClick={this._next}>
          Next
          </button>        
        )
      }
      return null;
    }
      
      render() {    
        return (
          <React.Fragment>
          <h1 id="kojima">KOJIMA NAME GENERATOR</h1>
          <p>You are on Section {this.state.currentStep} {this.previousButton()}</p> 
    
          <form onSubmit={this.handleSubmit}>
          {/* 
            render the form steps and pass required props in
          */}
          
            <Step1 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              fullname={this.state.fullname}
              occupation={this.state.occupation}
              condensedOccupation={this.state.condensedOccupation}
              embarassingCondensedMem = {this.state.embarassingCondensedMem}
              pet={this.state.pet}
            />
            <Step2 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              stabbed={this.state.stabbed}
              talent={this.state.talent}
              carrots={this.state.carrots}
              intangible={this.state.intangible}
              horses={this.state.horses}
              last={this.state.last}
            />
            <Step3 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              status={this.state.status}
              matter={this.state.matter}
              similar={this.state.similar}
              zodiac={this.state.zodiac}
              personality={this.state.personality}
            />
            <Step4
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              kurt={this.state.kurt}
              kubrick={this.state.kubrick}
              joy={this.state.joy}
              NPR={this.state.NPR}
              war={this.state.war}
              condensedMads={this.state.condensedMads}
            />
            {this.nextButton()}
            <br></br>
            {this.state.submitted && this.renderKojimaName()}
            {this.state.submitted && this.renderCloneCondition()}
            {this.state.submitted && this.renderTongue()}
    
          </form>
          </React.Fragment>
        );
      }
    }
 
export default Form;