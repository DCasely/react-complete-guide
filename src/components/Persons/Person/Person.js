import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './Person.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');

    return (
      <Aux>
        <p>
          My name is {this.props.name} and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changeName}
          value={this.props.name}
        />
        <button onClick={this.props.click}>Delete</button>
      </Aux>
    );
  }
}

export default Person;
