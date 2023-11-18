import { useEffect } from 'react'
import { InterfacePropsChildren } from "../data/types/props";
import { useGetCurrentUser } from "../data/hooks/auth";
import UIFeedbackLoading from "../UI/Feedback/Loading";
import { useNavigate } from "react-router-dom";

const RouteProtection:React.FC<InterfacePropsChildren> = ({children}) => {
    const navigate = useNavigate()
    const {isLoading, isAuth} = useGetCurrentUser()
    useEffect(()=>{
      if(!isLoading && !isAuth) navigate('/auth?mode=login')
    },[isLoading, isAuth, navigate])
    if(isLoading) return <UIFeedbackLoading />

    if(isAuth) return children
}
 
export default RouteProtection;