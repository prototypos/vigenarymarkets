import SelectActionTypes from './SelectActionTypes';
import AppDispatcher from '../dispatchers/AppDispatcher';
// import $ from 'jquery';

const Actions = {
  changeDate(evt) {
  	console.log("SelectActions.changeDate: dispatch(CHANGE_DATE)");
    AppDispatcher.dispatch({
      type: SelectActionTypes.CHANGE_DATE,
      evt
    });
  },

  changeSport(evt) {
  	console.log("SelectActions.changeDate: dispatch(CHANGE_SPORT)");
    AppDispatcher.dispatch({
      type: SelectActionTypes.CHANGE_SPORT,
      evt
    });
  },

};

export default Actions;