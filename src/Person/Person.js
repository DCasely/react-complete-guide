import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px',
    },
  };

  return (
    <div className="Person" style={style}>
      <p>
        My name is {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changeName} value={props.name} />
      <button onClick={props.click}>Delete</button>
    </div>
  );
};

export default Radium(person);
