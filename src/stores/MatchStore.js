import {ReduceStore} from 'flux/utils';
import MatchActionTypes from '../actions/MatchActionTypes';
import AppDispatcher from '../dispatchers/AppDispatcher';

class SelectStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return [];
  }
  
  reduce(state, action) {
    console.log("MatchStore: reduce()...");
    console.log(state);
    console.log(action);
  
    switch (action.type) {
      case MatchActionTypes.GET_MATCHES:
        return state;
        
      case MatchActionTypes.SET_MATCHES:
        return {
          "matches": action.matches
        };

      default:
        return state;
    }
  }
}

export default new SelectStore();