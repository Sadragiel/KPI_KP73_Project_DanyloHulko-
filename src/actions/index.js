export const getTemp = (name) => ({
  type: 'GET_TEMP',
  name
});

export const getCucold = (name) => {
  console.log('CUCOLD');
  return ({
  type: 'GET_CUCOLD',
  name
})};

export const setCityName=(name)=>({
  type:'CITY_NAME',
  name
}) 



export const getSlideIndex = () => {
  return ({
  type: 'GET_SLIDE_INDEX',
})};