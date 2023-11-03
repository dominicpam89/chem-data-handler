export const getChems = async ()=>{
  try {
    const response = await fetch('https://charming-plum-handbag.cyclic.app/compounds');
    const chems = await response.json();
    return chems
  } catch (error) {
    throw new Error(`Couldn't get chemical compounds data`);
  }
}