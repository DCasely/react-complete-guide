import React, { Component } from 'react';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import './App.css';

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
    const accounts = [...this.state.accounts];

    const updatedAccounts = accounts.filter((account, idx) => idx !== index);

    this.setState({ accounts: updatedAccounts });
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
    let accounts = null;

    if (this.state.showAccounts) {
      accounts = (
        <div>
          {this.state.accounts.map((account, index) => (
            <ErrorBoundary id={account.id} key={account.id}>
              <Person
                name={account.name}
                age={account.age}
                click={() => this.deleteAccount(index)}
                changeName={(e) => this.updateName(e, account.id)}
              />
            </ErrorBoundary>
          ))}
        </div>
      );
    }

    const classes = [];
    if (this.state.accounts.length <= 2) classes.push('red');
    if (this.state.accounts.length <= 1) classes.push('bold');

    return (
      <div className="App">
        <h1>REACT TRAINING</h1>

        <p className={classes.join(' ')}>
          Work Like There's Someone Working 24hrs Trying To Take It From You.
        </p>

        <button className="Button" onClick={this.showAccounts}>
          {this.state.showAccounts ? 'Hide Names' : 'Show Names'}
        </button>

        {accounts}

        <button className="reset-btn" onClick={this.resetHandler}>
          RESET
        </button>
      </div>
    );
  }
}

export default App;
