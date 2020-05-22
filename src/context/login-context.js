import React from 'react';

const loginContext = React.createContext({
  loggedIn: false,
  login: () => {},
});

export default loginContext;
