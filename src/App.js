import React, { Component } from 'react';
import logo from './logo.svg';
import Calendar from './components/Calendar';
import Appointment from './components/Appointment';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar />
      </div>
    );
  }
}

export default App;
