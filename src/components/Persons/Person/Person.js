import React from 'react';
import './Person.css';

const person = (props) => {
  console.log('[Person.js] rendering...');

  return (
    <div className="Person">
      <p>
        My name is {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changeName} value={props.name} />
      <button onClick={props.click}>Delete</button>
    </div>
  );
};

export default person;
