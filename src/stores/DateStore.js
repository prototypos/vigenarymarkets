import {ReduceStore} from 'flux/utils';
import DateActionTypes from '../actions/DateActionTypes';
import AppDispatcher from '../dispatchers/AppDispatcher';

class AlbumsStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    var today = new Date();  
    var dd = today.getDate();  
    var mm = today.getMonth()+1;   
    var yyyy = today.getFullYear();  

    if (dd<10) {  
      dd='0'+dd;  
    }   
    if (mm<10) {  
      mm='0'+mm;  
    }   
    return { "date": yyyy + "-" + mm + "-" + dd };
  }

  reduce(state, action) {
    console.log("DateStore: reduce()...");
    console.log(state);
    console.log(action);
  
    switch (action.type) {
      case DateActionTypes.CHANGE_DATE:
        console.log(action.evt.target.value);
        return { "date": action.evt.target.value };
        
      default:
        return state;
    }
  }
}

export default new AlbumsStore();