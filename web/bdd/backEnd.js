const axios = require('axios')

// const BACK_END_SERVER = process.env.NEXT_PUBLIC_API_URL
const BACK_END_SERVER = `api`

export function getRequest(ressource, params = {}){
    return axios.get(`${BACK_END_SERVER}/${ressource}`,
            {
                params: {...params}
            })
    .then(res => {
        return res?.data
    })
    .catch(err => {
        return Promise.reject()
    })
}

export function postRequest(ressource, params = {}){

    return axios.post(`${BACK_END_SERVER}/${ressource}`,
    {
        ...params,
    })
    .then(res => res?.data)
    .catch(err => Promise.reject())
}