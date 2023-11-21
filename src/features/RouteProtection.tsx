import { useEffect } from 'react'
import { TypePropsChildren } from "../data/types/props";
import { useGetCurrentUser } from "../data/hooks/auth";
import UIFeedbackLoading from "../UI/Feedback/Loading";
import { useNavigate } from "react-router-dom";

const RouteProtection:React.FC<TypePropsChildren> = ({children}) => {
    const navigate = useNavigate()
    const {isLoading, isAuth} = useGetCurrentUser()
    useEffect(()=>{
      console.log(isAuth)
      if(!isLoading && !isAuth) navigate('/auth?mode=login')
    },[isLoading, isAuth, navigate])
    if(isLoading) return <UIFeedbackLoading />

    if(isAuth) return children
}
 
export default RouteProtection;