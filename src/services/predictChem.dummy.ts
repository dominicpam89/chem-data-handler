export const getChems = async ()=>{
    const response = await fetch("https://charming-plum-handbag.cyclic.app/compounds")
    if(!response.ok) throw new Error(`Couldn't access comodeginicity database!`)
    const data = await response.json()
    return data
}