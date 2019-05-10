export const getTemp = (name) => ({
  type: 'GET_TEMP',
  name
});

export const getGalery = (page) => {
  console.log('Galery page', page);
  return ({
  type: 'GET_GALLERY',
  page
})};

export const setCityName=(name)=>({
  type:'CITY_NAME',
  name
}) 



export const getSlideIndex = () => {
  return ({
  type: 'GET_SLIDE_INDEX',
})};