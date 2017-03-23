import AppView from '../views/AppView';
import {Container} from 'flux/utils';

import DateStore from '../stores/DateStore';
import DateActions from '../actions/DateActions';
/*
import AlbumsActions from '../actions/AlbumsActions';
import GalleryActions from '../actions/GalleryActions';
*/

// import moment from 'moment';

function getStores() {
  return [
    DateStore
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
    onChangeDate: DateActions.changeDate,
    date: DateStore.getState().date,
  };
}

export default Container.createFunctional(AppView, getStores, getState);