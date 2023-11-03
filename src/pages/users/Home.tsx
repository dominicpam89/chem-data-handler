import { useState, useEffect } from "react";
import ErrorBlockComp from "../../components/ui/ErrorBlock";
import LoadingBlockComp from "../../components/ui/LoadingBlock";
import useGetChems from "../../data/hooks/useGetChems";
import { Autocomplete, TextField, Button } from "@mui/material";

interface AutocompleteOption {
  id: string;
  common_name: string;
  chemical_compound: string;
  formula: string;
}

const UserHome = () => {
  const { data, error, isError, isLoading } = useGetChems();
  const [chems, setChems] = useState<AutocompleteOption[]>([]);

  useEffect(() => {
    if (data) {
      setChems(data);
    }
  }, [data]);

  return (
    <>
      <div
        aria-label="search-form-container"
        className="w-full flex flex-col items-center justify-center"
      >
        {isError && <ErrorBlockComp error={error} />}
        {isLoading && <LoadingBlockComp />}
        {data && (
          <div className="w-[50%] flex flex-row space-x-4">
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={chems.map((option) => option.common_name)}
              sx={{width:'100%'}}
              renderInput={(params) => (
                  <>
                    <TextField {...params} label="Chemical Name" name='chemical_name' />
                  </>
              )}
            />
            <Button variant="contained" color="primary" type="submit">
              Search
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserHome;
