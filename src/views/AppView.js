import React from 'react';

import '../index.css';
import logo from './logo.png';
import './style.css';

function AppView(props) {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Vigenary Markets</h2>
        </div>
      </div>
    );
}
export default AppView;