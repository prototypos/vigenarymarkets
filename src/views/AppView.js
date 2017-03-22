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
        <div className="App-buttons">
          <button id="football" onClick={props.onButtonClicked} />
          <button id="basketball" onClick={props.onButtonClicked} />
          <button id="baseball" onClick={props.onButtonClicked} />
          <button id="hockey" onClick={props.onButtonClicked} />
          <button id="soccer" onClick={props.onButtonClicked} />
          <button id="tennis" onClick={props.onButtonClicked} />
          <button id="golf" onClick={props.onButtonClicked} />
        </div>
      </div>
    );
}
export default AppView;