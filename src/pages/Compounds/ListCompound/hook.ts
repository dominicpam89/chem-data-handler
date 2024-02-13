import { GridRowIdGetter, GridRowSelectionModel, GridValidRowModel } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { TypeCompound } from "../../../data/context/compound";
import { useContextMain } from "../../../data/hooks/useContext";

export const useGetParams = (data:TypeCompound[])=>{
	const {searchBar} = useContextMain().compound.predict
  const [paginationModel, setPaginationModel] = useState({
		pageSize: 5,
		page: 0,
	})
	const pageSizeOptions = [5,10,20,50,100]
	
	const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);
	useEffect(()=>{
		if(rowSelectionModel.length>0){
			const id = rowSelectionModel.at(0)
			const targetData = data.find(item=>item.pk===id)
			targetData && searchBar.setSelectedValue(targetData)
		}
	},[rowSelectionModel])

	const getRowId:GridRowIdGetter<GridValidRowModel|TypeCompound> | undefined = (row)=>row.pk

	const filterModel = {
		items: [
			{
				field: "trivial_name",
				operator: "contains",
				value: searchBar.selectedValue?.trivial_name,
			},
		],
	}

  return {
		paginationModel,
		rowSelectionModel,
		pageSizeOptions,
		filterModel,
		searchBar,
		setPaginationModel,
		setRowSelectionModel,
		getRowId,
  }
}