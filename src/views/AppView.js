import React from 'react';

import '../index.css';
import logo from './logo.png';
import './style.css';

function AppView(props) {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Vigenary Markets</h2>
      </div>
        <div className="App-buttons sport-selector">
          <input checked={props.sport === "sports"} id="sports" type="radio" name="sport" value="sports" onChange={evt => props.onChangeSport(evt.target.value)} />
          <label className="sport-label sports" htmlFor="sports"></label>
          <input checked={props.sport === "football"} id="football" type="radio" name="sport" value="football" onChange={evt => props.onChangeSport(evt.target.value)} />
          <label className="sport-label football" htmlFor="football"></label>
          <input checked={props.sport === "basketball"} id="basketball" type="radio" name="sport" value="basketball" onChange={evt => props.onChangeSport(evt.target.value)} />
          <label className="sport-label basketball" htmlFor="basketball"></label>
          <input checked={props.sport === "baseball"} id="baseball" type="radio" name="sport" value="baseball" onChange={evt => props.onChangeSport(evt.target.value)} />
          <label className="sport-label baseball" htmlFor="baseball"></label>
          <input checked={props.sport === "hockey"} id="hockey" type="radio" name="sport" value="hockey" onChange={evt => props.onChangeSport(evt.target.value)} />
          <label className="sport-label hockey" htmlFor="hockey"></label>
          <input checked={props.sport === "soccer"} id="soccer" type="radio" name="sport" value="soccer" onChange={evt => props.onChangeSport(evt.target.value)} />
          <label className="sport-label soccer" htmlFor="soccer"></label>
          <input checked={props.sport === "tennis"} id="tennis" type="radio" name="sport" value="tennis" onChange={evt => props.onChangeSport(evt.target.value)} />
          <label className="sport-label tennis" htmlFor="tennis"></label>
          <input checked={props.sport === "golf"} id="golf" type="radio" name="sport" value="golf" onChange={evt => props.onChangeSport(evt.target.value)} />
          <label className="sport-label golf" htmlFor="golf"></label>
        </div>
        <div className="App-date">
           <input type="date" name="date" className="date" value={props.date} onChange={(evt) => props.onChangeDate(evt.target.value)} />
        </div>
        <div className="App-matches">
          <ul>
            {props.matches.map(({key, value}) => (
                <li key={key}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    );
}
export default AppView;