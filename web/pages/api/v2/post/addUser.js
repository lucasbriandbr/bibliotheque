import { insertUser } from "../../../../bdd/post/addUser"

export default (req, res) => {
    const {email,password,name} = req.body
    return insertUser(email,password,name)
        .then(() => {
            return res.status(200).json({retour:'ok'})
        })
        .catch(err => {
            let error = err.code+'_'+err.meta?.target[0]
            if(!error) error = "ERROR_INTERNAL"
            return res.status(404).json({error})
        })
}