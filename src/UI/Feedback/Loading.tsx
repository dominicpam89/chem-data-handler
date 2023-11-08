import { CircularProgress } from '@mui/material';

const UIFeedbackLoading = () => {
  return <>
    <div className='fixed z-[500] t-0 l-0 w-screen h-screen flex flex-col justify-center items-center'>
      <CircularProgress />
    </div>
  </>
}
 
export default UIFeedbackLoading;