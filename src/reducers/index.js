const reducer = (state = { 
  page: 0, 
  maxPage: 0,
   resultOfPagination: [],
    loadingGallery: true,
     key: ''
      }, action) => {
  switch (action.type) {
    case 'GET_GALLERY':
      return { ...state, resultOfPagination: [], loadingGallery: true }
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
    case 'SET_GALLERY_KEY':
      return { ...state, key: action.key ? action.key : '' }
    default:
      return state;
  }
};

export default reducer;
