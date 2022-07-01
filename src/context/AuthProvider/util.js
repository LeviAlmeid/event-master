import { api } from "../../services/api";

export function setUserLocalStorage(user){
  localStorage.setItem('u', JSON.stringify(user))
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('u')

  if(!json){
    return null
  }

  const user = JSON.parse(json)

  return user ?? null
}


export async function LoginRequest(email, password){
  
  try{
    const request = await api.post('users/auth', {email, password})
    
    console.log("bati na api")
    
    return request.data; 
  }catch(error){
    console.log("deu erro no Login")
    return null;
  }

}