import React, {Component} from 'react';
import './App.css';
import Header from './header'
import './header.css'
import Form from '../form-page'


class App extends Component {
  state = {}

  render(){
    return(
      <div>
        <Header/>
        <div className="container">
          <Form/>
        </div>
        <br></br><br></br>
        <div className = "footer">All of the ideas here are credited to <a href="https://twitter.com/briamgilbert" target="_blank" rel="noopener noreferrer">brian david gilbert</a>. Check out my inspiration <a href="https://www.youtube.com/watch?v=t-3i6GBYvdw" target="_blank" rel="noopener noreferrer">here!</a></div>
      </div>      
    )
  }
}

export default App;
