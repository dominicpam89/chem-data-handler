import {
	GridRowIdGetter,
	GridRowSelectionModel,
	GridValidRowModel,
} from "@mui/x-data-grid";
import { useState, useContext, useEffect } from "react";
import { ContextMain } from "../../../data/context/main";
import { TypeCompound } from "../../../data/context/compound";
import { useNavigate } from "react-router-dom";

export const useGetParams = (data: TypeCompound[]) => {
	const navigate = useNavigate();
	const { searchBar } = useContext(ContextMain).compound;
	const [paginationModel, setPaginationModel] = useState({
		pageSize: 5,
		page: 0,
	});
	const pageSizeOptions = [5, 10, 20, 50, 100];

	const [rowSelectionModel, setRowSelectionModel] =
		useState<GridRowSelectionModel>([]);
	useEffect(() => {
		if (rowSelectionModel.length > 0) {
			const id = rowSelectionModel.at(0);
			const targetData = data.find((item) => item.pk === id);
			if (targetData) navigate("/compounds/" + targetData.pk);
		}
	}, [rowSelectionModel]);

	const getRowId:
		| GridRowIdGetter<GridValidRowModel | TypeCompound>
		| undefined = (row) => row.pk;

	const filterModel = {
		items: [
			{
				field: "trivial_name",
				operator: "contains",
				value: searchBar.displayValue,
			},
		],
	};

	return {
		paginationModel,
		rowSelectionModel,
		pageSizeOptions,
		filterModel,
		setPaginationModel,
		setRowSelectionModel,
		getRowId,
	};
};
