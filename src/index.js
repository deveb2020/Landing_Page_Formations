import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Style/index.css';
import App from '../src/Components/App';
import { HashRouter } from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    <HashRouter><App /></HashRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
