import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchGallery(actionObj) {


    let url = `/api/v1/gallery?page=${actionObj.page}`;

    if(actionObj.key){
        url += `&key=${actionObj.key.replace(' ', '+')}`
    }
        

    try{
        const response = yield fetch(url).then(response => response.json(), );
        yield all([put({ type: "GALLERY_RECEIVED", galleryActionData: response })]);
    }
    catch(error){
        yield all([put({ type: "GALLERY_ERRORED", error })]);
    }
}
  
export function* actionGalleryWatcher() {
    yield takeLatest('GET_GALLERY', fetchGallery)
}