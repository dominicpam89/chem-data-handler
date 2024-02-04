import { TypeLoginFormInput } from "../../pages/Auth/Login"

export const demoLogin = async(data:TypeLoginFormInput)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(data.email==="demo@email.com" && data.password==="DemoPassword12345"){
        const fakeToken = "12345"
        resolve(fakeToken)
      }
      else{
        const fakeError = "Wrong email/password"
        reject(new Error(fakeError))
      }
    },1000)
  })
}