import { all } from 'redux-saga/effects';
import {actionGalleryWatcher} from './gallery_saga/gallery_sage'

export default function* rootSaga() {
  yield all([
    actionGalleryWatcher(),
  ]);
}
