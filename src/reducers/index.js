const reducer = (state = { cityName: 'London' }, action) => {
  switch (action.type) {
    case 'GET_TEMP':
      return { ...state, loading: true, callDone: true };
    case 'TEMP_RECEIVED':
      return { ...state, temp: action.json, loading: false }
    case 'GET_CUCOLD':
      return { ...state, loadingCucold: true }
    case 'CUCOLD_RECEIVED':
      return { ...state, cucold: action.cucoldActionData }
    case 'CITY_NAME':
      return { ...state, cityName: action.name ? action.name :"London" }
    case 'GET_SLIDE_INDEX':
      return { ...state, slideIndex: action.slideIndex ? action.slideIndex : 0 }
    default:
      return state;
  }
};

export default reducer;
