import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
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

  changeNameHandler = (e) => {
    this.setState({
      persons: [
        { id: 1, name: e.target.value, age: 30 },
        { id: 2, name: e.target.value, age: 55 },
        { id: 3, name: e.target.value, age: 37 },
      ],
    });
  };

  resetHandler = () => {
    this.setState({
      persons: [
        { id: 1, name: 'Davin', age: 30 },
        { id: 2, name: 'Jack', age: 40 },
        { id: 3, name: 'Bill', age: 31 },
      ],
    });
  };

  render() {
    let persons = null;

    if (this.state.showAccounts) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changeName={this.changeNameHandler}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changeName={this.changeNameHandler}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            changeName={this.changeNameHandler}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button className="styleSwitchName" onClick={this.showAccounts}>
          Show Names
        </button>

        {persons}

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
