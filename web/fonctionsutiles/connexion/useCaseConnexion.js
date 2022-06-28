import { postRequest } from "../../bdd/backEnd"

// export function connect(mail,motdepasse){

//     return postRequest('connexion/connect', {mail,motdepasse})
//     .then((response) => {
//         setCookie('token', response.token);
//         setCookie('tokenRegen', response.tokenRegen);
        
//         return response
//     })
// }

export function register(email,password,name){
    return postRequest('http://localhost:3000/api/v2/post/addUser', {email,password,name})
}
