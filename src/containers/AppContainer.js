import AppView from '../views/AppView';
import {Container} from 'flux/utils';

import SelectStore from '../stores/SelectStore';
import SelectActions from '../actions/SelectActions';
/*
import AlbumsActions from '../actions/AlbumsActions';
import GalleryActions from '../actions/GalleryActions';
*/

// import moment from 'moment';

function getStores() {
  return [
    SelectStore
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
    date: SelectStore.getState().date,
    sport: SelectStore.getState().sport,
  };
}

export default Container.createFunctional(AppView, getStores, getState);