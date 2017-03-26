import SelectActionTypes from './SelectActionTypes';
import SelectStore from '../stores/SelectStore';
import MatchActions from './MatchActions';
import AppDispatcher from '../dispatchers/AppDispatcher';
// import $ from 'jquery';

const Actions = {
  changeDate(date) {
  	console.log("SelectActions.changeDate: dispatch(CHANGE_DATE)");
    AppDispatcher.dispatch({
      type: SelectActionTypes.CHANGE_DATE,
      date
    });
    MatchActions.getMatches(date, SelectStore.getState().sport);
  },

  changeSport(sport) {
  	console.log("SelectActions.changeDate: dispatch(CHANGE_SPORT)");
    AppDispatcher.dispatch({
      type: SelectActionTypes.CHANGE_SPORT,
      sport
    });
    MatchActions.getMatches(SelectStore.getState().date, sport);
  },

};

export default Actions;