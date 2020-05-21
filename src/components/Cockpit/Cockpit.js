import React, { useEffect } from 'react';
import './Cockpit.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // HTTP Request...
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);

    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  const bolder = [];
  if (props.accountsLength <= 2) bolder.push('red');
  if (props.accountsLength <= 1) bolder.push('bold');

  return (
    <div className="Cockpit">
      <h1>{props.title}</h1>
      <p className={bolder.join(' ')}>{props.subTitle}</p>
      <button className={props.btnColor} onClick={props.showAccounts}>
        {props.btnText}
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
