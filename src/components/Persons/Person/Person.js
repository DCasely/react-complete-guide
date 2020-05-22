import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import LoginContext from '../../../context/login-context';
import './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = LoginContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.loggedIn);
  }

  render() {
    console.log('[Person.js] rendering...');

    return (
      <Aux>
        {this.context.loggedIn ? <p>Logged In!</p> : <p>Please Log In</p>}

        <p>
          My name is {this.props.name} and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          // ref={(inputLast) => {
          //   this.inputElement = inputLast;
          // }}
          ref={this.inputElementRef}
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
