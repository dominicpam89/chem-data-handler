export type ErrorFetch = {
  errorStatus: number
  errorMessage: string
}

export const getError = (response:Response)=>{
  const errorStatus = response.status
  let errorMessage:string = ""
  switch(errorStatus){
    case 400:
      errorMessage="Bad Request"
      break
    case 401:
      errorMessage="Unauthorized Request"
      break
    case 403:
      errorMessage="Forbidden Request"
      break
    case 404:
      errorMessage="Link is not found"
      break
    default:
      errorMessage="There has been some errors"
      break
  }
  const error:ErrorFetch = { errorStatus, errorMessage }
  return error
}
