import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
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

Person.propTypes = {
  click: PropTypes.func,
  changeName: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
};

export default withClass(Person, 'Person');
