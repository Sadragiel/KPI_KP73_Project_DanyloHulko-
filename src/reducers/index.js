const reducer = (state = { page: 0, maxPage: 0, resultOfPagination: [], loadingGallery: true }, action) => {
  switch (action.type) {
    case 'GET_GALLERY':
      return { ...state, loadingGallery: true }
    case 'GALLERY_RECEIVED':
      return {
        ...state,
        loadingGallery: false,
        resultOfPagination: action.galleryActionData.resultOfPagination,
        page: action.galleryActionData.page,
        maxPage: action.galleryActionData.maxPage,
        
      }
    case 'GALLERY_ERRORED':
      return { ...state, error: action.error }
    default:
      return state;
  }
};

export default reducer;
