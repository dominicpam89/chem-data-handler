import { RegistrationInterface } from "../interfaces";

export const register = async (data:RegistrationInterface)=>{
  console.log(data);
  // const {username, password} = data;
  try {
    const response = await fetch('https://charming-plum-handbag.cyclic.app/users');
    const listUsers = await response.json();
    return listUsers;  
  } catch (error) {
    
  }
}