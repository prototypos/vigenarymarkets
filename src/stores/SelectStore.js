import {ReduceStore} from 'flux/utils';
import SelectActionTypes from '../actions/SelectActionTypes';
import AppDispatcher from '../dispatchers/AppDispatcher';

class SelectStore extends ReduceStore {
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
    return {
      "sport": "sports",
      "date": yyyy + "-" + mm + "-" + dd
    }
  }

  reduce(state, action) {
    console.log("DateStore: reduce()...");
    console.log(state);
    console.log(action);
  
    switch (action.type) {
      case SelectActionTypes.CHANGE_DATE:
        console.log(action.date);
        return {
          "sport": state.sport,
          "date": action.date
        };
        
      case SelectActionTypes.CHANGE_SPORT:
        console.log(action.sport);
        return {
          "sport": action.sport,
          "date": state.date
        };

      default:
        return state;
    }
  }
}

export default new SelectStore();