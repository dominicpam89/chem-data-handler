const IMAGES_URL = "/compound-images"

export const useGetCompoundImage = (picNum:number)=>{
  const imgSrc = `${IMAGES_URL}/${picNum}.png`
  return imgSrc
}