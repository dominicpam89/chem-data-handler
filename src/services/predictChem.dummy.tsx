import toast from "react-hot-toast"
import UIToast from "../UI/Toast"

export const getChems = async () => {
   const response = await fetch("https://charming-plum-handbag.cyclic.app/compounds")
   if (!response.ok) throw new Error(`Couldn't access comodeginicity database!`)
   const data = await response.json()
   return data
}

// Fake Dummy API Call
export const serviceRunPrediction = async () => {
   let toastId
   const promise = new Promise((resolve, reject)=>{
      const randomNum = Math.random()
      if(randomNum<0.5) setTimeout(()=>reject("Couldn't predict!"),1500)
      else setTimeout(()=>resolve(`Predict result: ${Math.round(Math.random()*999999)}`),1500)
   })
   const fakeAPICall = async ()=>{
      toastId = toast.promise(promise,{
         error: (t)=><UIToast message="Failed to predict!" t={t} />,
         loading: "Predicting...",
         success: (t)=><UIToast message="Predict successful!" t={t} />,
      })
      try {
         return await promise
      } catch (error) {
         throw new Error("Couldn't predict")
      }
   }
   const result = await fakeAPICall()
   return result
}
