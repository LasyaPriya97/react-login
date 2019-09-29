import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Userform from './Userform';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
     <Userform/>
     
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
