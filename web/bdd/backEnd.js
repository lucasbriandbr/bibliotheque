const axios = require('axios')

export function postRequest(ressource, params = {}){
return axios.post(`${process.env.API_URL}${ressource}`,
    {params},
    {headers: {'Authorization': '' ?? ''}})
    .then(res => res?.data)
    .catch(err => err.response?.data?.error)
}

export function getRequest(ressource, params = {}){
    return axios.get(`${process.env.API_URL}${ressource}`,
    {params},
    {headers: {'Authorization': '' ?? ''}})
    .then(res => res?.data)
    .catch(err => err.response?.data?.error)
}