import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Reset from '../components/Reset/Reset';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    accounts: [
      { id: 1, name: 'Davin', age: 30 },
      { id: 2, name: 'Jack', age: 40 },
      { id: 3, name: 'Bill', age: 31 },
    ],
    showAccounts: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

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
    console.log('[App.js] render');

    const bolder = [];
    if (this.state.accounts.length <= 2) bolder.push('red');
    if (this.state.accounts.length <= 1) bolder.push('bold');

    return (
      <div className="App">
        <Cockpit
          title={this.props.appTitle}
          subTitle={this.props.appSubTitle}
          showAccounts={this.showAccounts}
          showing={this.state.showAccounts}
          bolder={bolder.join(' ')}
          btnText={this.state.showAccounts ? 'Hide Names' : 'Show Names'}
          btnColor={this.state.showAccounts ? 'btn-red' : 'btn-green'}
        />

        {this.state.showAccounts && (
          <Persons
            accounts={this.state.accounts}
            delete={this.deleteAccount}
            updated={this.updateName}
          />
        )}

        <Reset resetHandler={this.resetHandler} />
      </div>
    );
  }
}

export default App;
