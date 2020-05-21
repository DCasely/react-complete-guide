import React from 'react';
import './Cockpit.css';

const Cockpit = (props) => {
  return (
    <div className="Cockpit">
      <h1>{props.title}</h1>
      <p className={props.bolder}>{props.subTitle}</p>
      <button className={props.btnColor} onClick={props.showAccounts}>
        {props.btnText}
      </button>
    </div>
  );
};

export default Cockpit;
