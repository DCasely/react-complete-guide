import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import names from './Person/names';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Jake', age: 28 },
      { id: 2, name: 'Jack', age: 40 },
      { id: 3, name: 'Bill', age: 31 },
    ],
    otherState: 'some other value',
  };

  switchNameHandler = () => {
    // console.log('Was Clicked');
    // DON'T DO THIS:M this.state.persons[0].name = 'Davin';

    this.setState({
      persons: [
        { id: 1, name: 'Davin', age: 30 },
        { id: 2, name: 'John', age: 55 },
        { id: 3, name: 'Sarah', age: 37 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        {/* 
        {names.map((person) => (
          <Person
            id={person.id}
            key={person.id}
            name={person.name}
            age={person.age}
          />
        ))} */}

        {/* <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        /> */}

        {this.state.persons.map((person) => (
          <Person
            id={person.id}
            key={person.id}
            name={person.name}
            age={person.age}
          />
        ))}

        <Person name="Manu" age="29">
          My Hobbies: Racing
        </Person>
      </div>
    );

    //   return React.createElement(
    //     'div',
    //     { className: 'App' },
    //     React.createElement('h1', null, "Hi, I'm a React App!!!")
    //   );
  }
}

export default App;
