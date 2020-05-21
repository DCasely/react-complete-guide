import React from 'react';
import './Cockpit.css';

const Cockpit = (props) => {
  return (
    <div className="Cockpit">
      <h1>REACT TRAINING</h1>
      <p className={props.bolder}>
        Work Like There's Someone Working 24hrs Trying To Take It From You.
      </p>
      <button className={props.btnColor} onClick={props.showAccounts}>
        {props.btnText}
      </button>
    </div>
  );
};

export default Cockpit;
