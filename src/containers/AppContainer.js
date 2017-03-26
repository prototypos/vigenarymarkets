import AppView from '../views/AppView';
import {Container} from 'flux/utils';

import SelectStore from '../stores/SelectStore';
import SelectActions from '../actions/SelectActions';
import MatchStore from '../stores/MatchStore';
//import MatchActions from '../actions/MatchActions';

function getStores() {
  return [
    SelectStore,
    MatchStore
  ];
}

function getState() {
  console.log("AppContainer.getState()");

  return {
  /*
  	options: AlbumsStore.getState().options,
  	value: GalleryStore.getState().value,
    images: GalleryStore.getState().images,
    onGetAlbums: AlbumsActions.getAlbums,
    onChangeGallery: GalleryActions.changeGallery
  */
    onChangeDate: SelectActions.changeDate,
    onChangeSport:SelectActions.changeSport,
    // onPickMatch:MatchActions.pickMatch,

    date: SelectStore.getState().date,
    sport: SelectStore.getState().sport,
    matches: MatchStore.getState().matches,
  };
}

export default Container.createFunctional(AppView, getStores, getState);