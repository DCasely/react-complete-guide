import React, { useEffect, useRef } from 'react';
import LoginContext from '../../context/login-context';
import './Cockpit.css';

const Cockpit = (props) => {
  const buttonClickRef = useRef(null);

  // useEffect RUNS after this entire function LOADS.
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // HTTP Request...
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);

    buttonClickRef.current.click();

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
      <button
        ref={buttonClickRef}
        className={props.btnColor}
        onClick={props.showAccounts}
      >
        {props.btnText}
      </button>

      <LoginContext.Consumer>
        {(context) => (
          <button onClick={context.login} className={props.btnGreen}>
            Log In
          </button>
        )}
      </LoginContext.Consumer>
    </div>
  );
};

export default React.memo(Cockpit);
