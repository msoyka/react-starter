import React from 'react';
import { Button } from '@myunfi-react/myunfi-ui/core';

import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reloads.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
