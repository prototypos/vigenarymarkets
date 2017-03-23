import DateActionTypes from './DateActionTypes';
import AppDispatcher from '../dispatchers/AppDispatcher';
// import $ from 'jquery';

const Actions = {
  changeDate(evt) {
  	console.log("DateActions.changeDate: dispatch(CHANGE_DATE)");
    AppDispatcher.dispatch({
      type: DateActionTypes.CHANGE_DATE,
      evt
    });
  },
};

export default Actions;