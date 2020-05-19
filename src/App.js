import React, { Component } from 'react';
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

  deleteAccount = (accountIndex) => {
    // const account = this.state.accounts.slice();
    const accounts = [...this.state.accounts];
    accounts.splice(accountIndex, 1);
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
    let accounts = null;

    if (this.state.showAccounts) {
      accounts = (
        <div>
          {this.state.accounts.map((account, index) => (
            <Person
              id={account.id}
              key={account.id}
              name={account.name}
              age={account.age}
              click={() => this.deleteAccount(account.id)}
            />
          ))}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>REACT TRAINING</h1>

        <button className="styleSwitchName" onClick={this.showAccounts}>
          Show Names
        </button>

        {accounts}

        <button className="styleReset" onClick={this.resetHandler}>
          RESET
        </button>
      </div>
    );
  }
}

export default App;

// const [personsState, setPersonsState] = useState({
//   persons: [
//     { id: 1, name: 'Jake', age: 28 },
//     { id: 2, name: 'Jack', age: 40 },
//     { id: 3, name: 'Bill', age: 31 },
//   ],
// });

// const [otherState, setOtherState] = useState('some other value');

// console.log(personsState, otherState);

// const switchNameHandler = () => {
//   setPersonsState({
//     persons: [
//       { id: 1, name: 'Davin', age: 30 },
//       { id: 2, name: 'John', age: 55 },
//       { id: 3, name: 'Sarah', age: 37 },
//     ],
//   });

//   setOtherState('Changed Other State');
// };
