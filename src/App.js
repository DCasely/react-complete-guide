import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 1, name: 'Jake', age: 28 },
      { id: 2, name: 'Jack', age: 40 },
      { id: 3, name: 'Bill', age: 31 },
    ],
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { id: 1, name: 'Davin', age: 30 },
        { id: 2, name: 'John', age: 55 },
        { id: 3, name: 'Sarah', age: 37 },
      ],
    });

    setOtherState('Changed Other State');
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>

      {personsState.persons.map((person) => (
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
};

export default App;

// state = {
//   persons: [
//     { id: 1, name: 'Jake', age: 28 },
//     { id: 2, name: 'Jack', age: 40 },
//     { id: 3, name: 'Bill', age: 31 },
//   ],
//   otherState: 'some other value',
// };

// switchNameHandler = () => {
//   // console.log('Was Clicked');
//   // DON'T DO THIS:M this.state.persons[0].name = 'Davin';

//   this.setState({
//     persons: [
//       { id: 1, name: 'Davin', age: 30 },
//       { id: 2, name: 'John', age: 55 },
//       { id: 3, name: 'Sarah', age: 37 },
//     ],
//   });
// };
