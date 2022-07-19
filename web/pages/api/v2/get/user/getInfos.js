import { getInfos } from '../../../../../bdd/get/user/getInfos'

export default async (req, res) => {
    const {name} = req.query
    const user = await getInfos(name)
    return res.status(200).json(user)
}