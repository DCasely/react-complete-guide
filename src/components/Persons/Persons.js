import React from 'react';
import Person from './Person/Person';

const Persons = (props) =>
  props.accounts.map((account, index) => (
    <Person
      id={account.id}
      key={account.id}
      name={account.name}
      age={account.age}
      click={() => props.delete(index)}
      changeName={(e) => props.updated(e, account.id)}
    />
  ));

export default Persons;
