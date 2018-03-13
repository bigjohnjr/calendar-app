import React, { Component } from 'react';

class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
  }

  inputShow() {
    const { 
      isToggleOn,
    } = this.state;


  }

  render () {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Make appointment' : 'OFF'}
      </button>
    );
  }
}

export default Appointment;
