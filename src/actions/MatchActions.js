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
  },
};

export default Actions;