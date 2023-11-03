import { RegistrationInputInterface } from './interfaces';

export const initialValueRegistrationError:RegistrationInputInterface = {
 firstName:{
  error: null,
  errorMessage: '',
  touched: false,
 },
 lastName:{
  error: null,
  errorMessage: '',
  touched: false,
 },
 username:{
  error: null,
  errorMessage: '',
  touched: false,
 },
 email:{
  error: null,
  errorMessage: '',
  touched: false,
 },
 password:{
  error: null,
  errorMessage: '',
  touched: false,
 },

}