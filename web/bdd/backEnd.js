const axios = require('axios')

export function postRequest(ressource, params = {}){
    return axios.post(`${ressource}`,
    {
        ...params,
    },
    {headers: {'Authorization': '' ?? ''}})
    .then(res => res?.data)
    .catch(err => err.response?.data?.error)
}

export function getRequest(ressource, params = {}){
    return axios.get(`${ressource}`,
            {
                headers: {'Authorization': '' ?? ''},
                params: {...params}
            })
    .then(res => {return res?.data})
    .catch(err => err.response?.data?.error)
}