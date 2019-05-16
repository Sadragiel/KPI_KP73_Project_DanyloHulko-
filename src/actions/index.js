
export const getGalery = (page, key) => {
  return ({
  type: 'GET_GALLERY',
  page, key
})};

export const setGaleryKey=(key)=>({
  type:'SET_GALLERY_KEY',
  key
}) 