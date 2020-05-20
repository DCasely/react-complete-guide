import React from 'react';
import './Person.css';

const person = (props) => {
  const random = Math.random();

  if (random > 0.7) {
    throw new Error('Something Went Wrong');
  }
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
