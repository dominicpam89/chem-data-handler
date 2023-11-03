import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import { Typography } from '@mui/material';

const FormHeaderComp = () => {
  return (
    <>
      <div
        aria-label="form-header"
        className="p-5 flex justify-center items-center space-x-3"
      >
        <DonutSmallIcon fontSize="large" color="primary" />
        <Typography variant="h6">Logo | Project Icon</Typography>
      </div>
    </>
  );
};

export default FormHeaderComp;
