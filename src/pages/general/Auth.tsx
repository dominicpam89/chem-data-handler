import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import AuthRegister from '../../components/general/AuthRegister';
import AuthLogin from '../../components/general/AuthLogin';

const AuthPage = ()=>{

  /* set url accordingly */
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(()=>{
    if(searchParams.get('mode')!=='register' && searchParams.get('mode')!=='login') navigate('/auth?mode=login');
  },[searchParams,setSearchParams]);
  const isRegistration = searchParams.get('mode')==='register';
  /* ------------------- */
  
  return <>
    <div className='w-full flex items-center justify-center py-14'>
      {isRegistration && <AuthRegister />}
      {!isRegistration && <AuthLogin />}
    </div>
  </>
}

export default AuthPage;