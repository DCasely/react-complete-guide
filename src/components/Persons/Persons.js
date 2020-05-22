import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   return (
  //     nextProps.accounts !== this.props.accounts ||
  //     nextProps.delete !== this.props.delete ||
  //     nextProps.updated !== this.props.updated
  //   );
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');

    return this.props.accounts.map((account, index) => (
      <Person
        id={account.id}
        key={account.id}
        name={account.name}
        age={account.age}
        click={() => this.props.delete(index)}
        changeName={(e) => this.props.updated(e, account.id)}
        isLoggedIn={this.props.isLoggedIn}
      />
    ));
  }
}

export default Persons;
