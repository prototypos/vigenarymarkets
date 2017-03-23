import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
          <button id="sports" title="All Sports" onClick={props.onButtonClicked} />
          <button id="football" title="Football" onClick={props.onButtonClicked} />
          <button id="basketball" title="Basketball" onClick={props.onButtonClicked} />
          <button id="baseball" title="Baseball" onClick={props.onButtonClicked} />
          <button id="hockey" title="Hockey" onClick={props.onButtonClicked} />
          <button id="soccer" title="Soccer" onClick={props.onButtonClicked} />
          <button id="tennis" title="Tennis" onClick={props.onButtonClicked} />
          <button id="golf" title="Golf" onClick={props.onButtonClicked} />
        </div>
        <div className="App-date">
          <DatePicker
            selected={props.startDate}
            onChange={props.onChangeDate} 
            peekNextMonth 
            showMonthDropdown 
            showYearDropdown 
            dropdownMode="select" 
          />
        </div>
      </div>
    );
}
export default AppView;