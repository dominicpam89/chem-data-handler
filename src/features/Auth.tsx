import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import UIContainerLanding from "../UI/ContainerLanding";
import UICard from "../UI/Card";
import UICardHeader from "../UI/Card/Header";
import UICardContent from "../UI/Card/Content";
import UIBrand from "../UI/Brand";
import AuthLogin from "./Auth/Login";
import AuthRegister from "./Auth/Register";

const AuthPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(()=>{
    if(
      searchParams.get('mode')!=='login' && searchParams.get('mode')!=='register'
    ){
      const param = new URLSearchParams('?mode=login');
      setSearchParams(param);
    }
  },[searchParams, setSearchParams]);
  return <>
    <UIContainerLanding>
      <UICard>
        <UICardHeader>
          <UIBrand size={16} color={'dark'} />
        </UICardHeader>
        <UICardContent>
          {searchParams.get('mode')==='login' && <AuthLogin />}
          {searchParams.get('mode')==='register' && <AuthRegister />}
        </UICardContent>
      </UICard>
    </UIContainerLanding>
  </>
}
 
export default AuthPage;