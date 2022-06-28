const axios = require('axios')

export function postRequest(ressource, params = {}){
    return axios.post(`${ressource}`,
    {
        ...params,
    },
    {headers: {'Authorization': '' ?? ''}})
    .then(res => res?.data)
    .catch(err => Promise.reject(console.error(err.response?.data?.error)))
}