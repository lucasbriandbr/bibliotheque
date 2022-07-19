import insertUser from '../../../../bdd/post/addUser.js'

export default (req, res) => {
    const {email,password,name} = req.body.params
    return insertUser(email,password,name)
    .then(() => {
        return res.status(200).json({retour:'ok'})
    })
    .catch(err => {
        let error = err.code+'_'+err.meta
        if(!error) error = "ERROR_INTERNAL"
        return res.status(401).json({error})
    })

}