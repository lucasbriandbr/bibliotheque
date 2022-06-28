const axios = require('axios')

// const BACK_END_SERVER = process.env.NEXT_PUBLIC_API_URL
const BACK_END_SERVER = `api/v2`

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
    return axios.post(`${ressource}`,
    {
        ...params,
    })
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })
}