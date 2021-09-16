import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RelayEnvironmentProvider } from "react-relay"
import Environment  from './environment';


ReactDOM.render(

    <RelayEnvironmentProvider environment = {Environment}>
      <React.Suspense fallback="Loading">
      <App />
      </React.Suspense>
    
    </RelayEnvironmentProvider>,
  document.getElementById('root')
);

