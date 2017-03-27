import MatchActionTypes from './MatchActionTypes';
import AppDispatcher from '../dispatchers/AppDispatcher';
// import $ from 'jquery';

const Actions = {
  getMatches(date, sport) {
  	console.log("MatchActions.getMatches: dispatch(GET_MATCHES)");
    AppDispatcher.dispatch({
      type: MatchActionTypes.GET_MATCHES,
      date,
      sport
    });
    // get matches here...
    console.log("date: " + date + ", sport: " + sport);
    setTimeout(() => {
      AppDispatcher.dispatch({
        type: MatchActionTypes.SET_MATCHES,
        matches: [
          { "key": 1001, "value": "UCLA v Kentucky"},
          { "key": 1002, "value": "Gonzaga v West Virginia"},
          { "key": 1003, "value": "Florida v Wisconsin"},
        ]
      })
    }, 1000);
  },
};

export default Actions;