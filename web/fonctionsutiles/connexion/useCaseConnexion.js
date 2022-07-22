import { getRequest, postRequest } from "../../bdd/backEnd"

// export function connect(mail,motdepasse){

//     return postRequest('connexion/connect', {mail,motdepasse})
//     .then((response) => {
//         setCookie('token', response.token);
//         setCookie('tokenRegen', response.tokenRegen);
        
//         return response
//     })
// }

export function register(email,password,name){
    return postRequest('/api/v2/post/addUser', {email,password,name})
}

export function getUserInfos(name) {
    return getRequest('/api/v2/get/user/getInfos', {name})
    .then((userInfos) => {
        return userInfos
    })
}

export function searchUser(string) {
    return getRequest('/api/v2/get/user/getName', {string})
    .then((userInfos) => {
        return userInfos
    })
}