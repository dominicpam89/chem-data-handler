import { useNavigate } from 'react-router-dom';
import { ButtonGroup, Button } from '@mui/material';

const ButtonsComp = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col space-y-6 pt-8">
      <ButtonGroup size="small" fullWidth>
        <Button variant="outlined" color="primary">
          Reset
        </Button>
        <Button variant="contained" color="primary">
          Register
        </Button>
      </ButtonGroup>
      <Button
        fullWidth
        variant="text"
        color="info"
        size="small"
        onClick={() => navigate("/auth?mode=login")}
      >
        Already has account?
      </Button>
    </div>
  );
};

export default ButtonsComp;
