import React, { useEffect } from 'react';
import './Cockpit.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // HTTP Request...
  });

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
