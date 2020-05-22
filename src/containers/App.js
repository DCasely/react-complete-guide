import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Reset from '../components/Reset/Reset';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import LoginContext from '../context/login-context';
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
    showCockpit: true,
    counter: 0,
    loggedIn: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

    this.setState((prevState, props) => {
      return { accounts: accounts, counter: prevState.counter + 1 };
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

  loginHandler = () => {
    const log = this.state.loggedIn;
    this.setState({ loggedIn: !log });
  };

  render() {
    console.log('[App.js] render');

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>

        <LoginContext.Provider
          value={{
            loggedIn: this.state.loggedIn,
            login: this.loginHandler,
          }}
        >
          {this.state.showCockpit && (
            <Cockpit
              title={this.props.appTitle}
              subTitle={this.props.appSubTitle}
              accounts={this.state.accounts}
              accountsLength={this.state.accounts.length}
              showAccounts={this.showAccounts}
              showing={this.state.showAccounts}
              btnText={this.state.showAccounts ? 'Hide Names' : 'Show Names'}
              btnColor={this.state.showAccounts ? 'btn-red' : 'btn-green'}
              btnGreen="btn-green"
            />
          )}

          {this.state.showAccounts && (
            <Persons
              accounts={this.state.accounts}
              delete={this.deleteAccount}
              updated={this.updateName}
              isLoggedIn={this.state.loggedIn}
            />
          )}
        </LoginContext.Provider>

        <Reset resetHandler={this.resetHandler} />
      </Aux>
    );
  }
}

export default withClass(App, 'App');
