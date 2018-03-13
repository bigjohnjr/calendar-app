import React from 'react';
import Calendar from './components/Calendar';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="description">
          Calendar App built in React.js
        </div>
        <Calendar />
      </div>
    );
  }
}

export default App;
