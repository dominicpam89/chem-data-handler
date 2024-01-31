const URL = "https://charming-plum-handbag.cyclic.app"

export const getCompounds = async ()=>{
  return fetch(`${URL}/compounds`)
  .then(response => response.json())
  .then(data => {
    return data
  })
  .catch(error => {
    throw error
  });
}