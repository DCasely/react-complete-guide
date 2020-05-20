import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    accounts: [
      { id: 1, name: 'Davin', age: 30 },
      { id: 2, name: 'Jack', age: 40 },
      { id: 3, name: 'Bill', age: 31 },
    ],
    showAccounts: false,
  };

  showAccounts = () => {
    const show = this.state.showAccounts;

    this.setState({ showAccounts: !show });
  };

  updateName = (e, id) => {
    const accountIndex = this.state.accounts.findIndex((acc) => {
      return acc.id === id;
    });

    const account = { ...this.state.accounts[accountIndex] };

    account.name = e.target.value;

    const accounts = [...this.state.accounts];

    accounts[accountIndex] = account;

    this.setState({
      accounts: accounts,
    });
  };

  deleteAccount = (index) => {
    // const account = this.state.accounts.slice();
    const accounts = [...this.state.accounts];

    accounts.splice(index, 1);

    this.setState({ accounts: accounts });
  };

  resetHandler = () => {
    this.setState({
      accounts: [
        { id: 1, name: 'Davin', age: 30 },
        { id: 2, name: 'Jack', age: 40 },
        { id: 3, name: 'Bill', age: 31 },
      ],
    });
  };

  render() {
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '3px solid black',
      padding: '8px',
      cursor: 'pointer',
      display: 'block',
      margin: '1rem auto',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
        transform: 'scale(1.1)',
      },
      ':active': {
        backgroundColor: 'black',
        color: 'white',
        transform: 'scale(1)',
      },
    };

    let accounts = null;

    if (this.state.showAccounts) {
      accounts = (
        <div>
          {this.state.accounts.map((account, index) => (
            <Person
              id={index}
              key={index}
              name={account.name}
              age={account.age}
              click={() => this.deleteAccount(index)}
              changeName={(e) => this.updateName(e, index)}
            />
          ))}
        </div>
      );
    }

    const classes = [];
    if (this.state.accounts.length <= 2) classes.push('red');
    if (this.state.accounts.length <= 1) classes.push('bold');

    return (
      <StyleRoot>
        <div className="App">
          <h1>REACT TRAINING</h1>

          <p className={classes.join(' ')}>
            Work Like There's Someone Working 24hrs Trying To Take It From You.
          </p>

          <button style={buttonStyle} onClick={this.showAccounts}>
            {this.state.showAccounts ? 'Hide Names' : 'Show Names'}
          </button>

          {accounts}

          <button className="reset-btn" onClick={this.resetHandler}>
            RESET
          </button>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
