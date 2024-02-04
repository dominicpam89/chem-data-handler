import { useMutation } from "@tanstack/react-query"
import { demoLogin } from "../services/demo-auth"
import { TypeLoginFormInput } from "../../pages/Auth/Login"

export const useDemoLogin = ()=>{
  const {mutate:onLogin, error, isError, isSuccess, isPending, data} = useMutation({
    mutationFn: (data:TypeLoginFormInput)=>demoLogin(data)
  })
  const onLoginState = {isError, isPending, isSuccess}
  const onLoginData = {data, error}
  return {onLogin, onLoginState, onLoginData}
}