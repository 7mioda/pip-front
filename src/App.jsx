import React from 'react';
import Routes from './routes';
import useSubscribe from './hooks/useSubscribe';

const App = () => {
  useSubscribe('http://example.com/users', alert);
  return <Routes />;
};

export default App;
