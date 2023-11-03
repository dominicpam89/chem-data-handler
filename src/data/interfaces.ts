export interface RegistrationInterface{
  firstName: string,
  lastName: string,
  email: string,
  username: string,
  password: string,
}

interface InputErrors{
  error: boolean|null,
  touched: boolean,
  errorMessage: string|null,
}

export interface RegistrationInputInterface{
  firstName: InputErrors,
  lastName: InputErrors,
  username: InputErrors,
  email: InputErrors,
  password: InputErrors,
}