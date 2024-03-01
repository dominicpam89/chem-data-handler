import { PUBCHEM_BASE_API } from "../../services/pubchem"
import { TPubchemInputFilter, TType } from "./input-filter"

export const pubchemGetURL = (
	dataType: TType = "compound",
	inputBy: TPubchemInputFilter,
	inputByVal: string
) => {
	/** @generator */
	/* 
		target return URL:
			https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/1000/json
			https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/abothyl/json
			https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/CCCCOCC/json
		abstract URL:
			PUBCHEM_BASE_API/dataType/inputBy/inputByVal/json
	*/

	let URL = ""
	URL += PUBCHEM_BASE_API
	URL += "/"
	URL += dataType
	URL += "/"
	URL += inputBy
	URL += "/"
	URL += inputByVal
	URL += "/json"
	return URL
}


// export const pubchemJSONTransformer = (data:TPubchemDataFullRecord)=>{
	// const cid = data.id.id.cid
	// const atoms = data.atoms ? {
	// 	aid: data.atoms?.aid.join(", "),
	// 	element: data.atoms?.element.join(", ")
	// }: null
	// const bonds = {
	// 	aid1: data.bonds?.aid1.join(", "),
	// 	aid2: data.bonds?.aid2.join(", "),
	// 	order: data.bonds?.order.join(", "),
	// }
	// const coords = data.coords ? {
	// 	type: data.coords.at(0)!.type.join(", "),
	// 	aid: data.coords.at(0)!.aid.join(", "),
	// 	conformers: {
	// 		x: data.coords.at(0)!.conformers.x.join(", "),
	// 		y: data.coords.at(0)!.conformers.y.join(", "),
	// 		style: data.coords.at(0)!.conformers.y.join(", "),
	// 	}
	// }:null

// }