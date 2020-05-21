import React from 'react';
import './Reset.css';

const Reset = (props) => {
  return (
    <div className="Reset">
      <button className="reset-btn" onClick={props.resetHandler}>
        RESET
      </button>
    </div>
  );
};

export default Reset;
