import { useState } from "react";
import { UserRegistration } from "../../data/classes/User";
// import { RegistrationInputInterface } from "../../data/interfaces";
// import { initialValueRegistrationError } from "../../data/utils";

import FormHeaderComp from "./AuthRegister/FormHeader";
import FirstNameComp from "./AuthRegister/FirstName";
import LastNameComp from "./AuthRegister/LastName";
import EmailComp from "./AuthRegister/Email";
import UsernameComp from "./AuthRegister/Username";
import PasswordComp from "./AuthRegister/Password";
import ButtonsComp from "./AuthRegister/Buttons";

export interface Props{
  onBlurHandler: (e:React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>)=>void
}

const AuthRegister = () => {
  const [formData, setFormData] = useState<UserRegistration>(new UserRegistration('','','','',''));
  // const [errors, setError] = useState<RegistrationInputInterface>(initialValueRegistrationError);
  const [showPass, setShowPass] = useState<boolean>(false);

  console.log(formData);

  const inputBlurHandler = (e:React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>)=>{
    setFormData(ps=>({...ps,[e.target.id]:e.target.value}));
    // const id = e.target.id;
    // const val = e.target.value;
    // switch(id){
    //   case 'firstName':
    //     if(val==='') setError(ps=>({...ps,firstName:{touched:true,error:true,errorMessage:`Couldn't empty`}}))
    //     if(val.length<=3) setError(ps=>({...ps,firstName:{touched:true,error:true,errorMessage:`Must be more than 3`}}))
    //     else setError(ps=>({...ps,firstName:{touched:true,error:false,errorMessage:null}})) 
    //   break;
    //   case 'lastName':
    //     if(val==='') setError(ps=>({...ps,firstName:{touched:true,error:true,errorMessage:`Couldn't empty`}}))
    //     if(val.length<=3) setError(ps=>({...ps,firstName:{touched:true,error:true,errorMessage:`Must be more than 3`}}))
    //     else setError(ps=>({...ps,firstName:{touched:true,error:false,errorMessage:null}})) 
    //   break;
    //   case 'username':
    //     if(val==='') setError(ps=>({...ps,firstName:{touched:true,error:true,errorMessage:`Couldn't empty`}}))
    //     if(val.length<=3) setError(ps=>({...ps,firstName:{touched:true,error:true,errorMessage:`Must be more than 3`}}))
    //     else setError(ps=>({...ps,firstName:{touched:true,error:false,errorMessage:null}})) 
    //   break;
    // }
  }

  const onSubmitHandler = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
  }

  return <>
      <form className="w-slim flex flex-col space-y-8 p-14 shadow-xl" onSubmit={onSubmitHandler}>
        <FormHeaderComp />
        <div aria-label='divider-2' className="flex space-x-6">
          <FirstNameComp onBlurHandler={inputBlurHandler} />
          <LastNameComp onBlurHandler={inputBlurHandler} />
        </div>
        <EmailComp onBlurHandler={inputBlurHandler} />
        <UsernameComp onBlurHandler={inputBlurHandler} />
        <PasswordComp 
          onBlurHandler={inputBlurHandler}
          setShowPass={setShowPass}
          showPass={showPass}
        />
        
        <ButtonsComp />
        
      </form>
  </>
};

export default AuthRegister;
